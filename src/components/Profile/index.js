import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { useSelector } from "react-redux";

import { storage } from "../../Firebase";
import { Spinner, Stack, Button, CloseButton } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import {AiFillSetting} from 'react-icons/ai'


const Profile = () => {
  //get user in profile...
  const [user, setUser] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const [urll, setUrll] = useState("");
  const [progress, setProgress] = useState(0);
  const [edit, setEdit] = useState(false);
    const { id } = useParams();

  const state = useSelector((state) => {
    return state;
  });

  /////////////////////////////{  Get user Information }/////////////////////////////////

  const getOneUser = async () => {
    const user = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/user/users/${state.signIn.userID}`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );
    console.log(user.data);
    setUser(user.data);
  };
  /////////////////////////////{  avatar  }/////////////////////////////////////////////


  const handleChangeAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  ///////////////////////////////////{  handleUploadAvatar  }////////////////////////////

  const handleUploadAvatar = () => {
    const uploadTask = ref(storage,`images/${avatar.name}`)
    // .put(avatar);
    const uploadImamge = uploadBytesResumable(uploadTask, avatar);

    uploadImamge.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
          getDownloadURL(uploadImamge.snapshot.ref).then((url) => {
            updateUser(url)
          }); 
       
      }
    );
  };

  ////////////////////////////{   Edit Profile  }//////////////////////////////////////

  const updateUser = async (img ) => {
   
      console.log(id,"id",state.signIn.userID);
    const result = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/user/updateProfile/${state.signIn.userID}`,
      {
         avatar: img,
      },

      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    console.log(result.data);
    getOneUser();
  };

  useEffect(() => {
    getOneUser();
  }, []);


  ///////////////////////////////{  Return  }//////////////////////////////////////////////
  return (
    <>
      {user && user[0] ? (
        <div className="return">
          <div className="contenerImg">
            <AiFillSetting className="Setting" onClick={() => setEdit(true)} />
            <div className="borderImg">
              <img className="othersImg" src={user[0].avatar} alt="img" />
            </div>
            <h3 className="name"> name : {user[0].name} </h3>
            <h3 className="name"> username : {user[0].username} </h3>
            <h3 className="name"> email : {user[0].email} </h3>
            {/* <h3 className="name"> city : {user[0].city} </h3>
            <h3 className="name"> street : {user[0].street} </h3> */}
          </div>
          <div className="editContainer"></div>
          {edit ? (
            <div className="edit">
              <CloseButton
                size="lg"
                colorScheme="teal"
                variant="ghost"
                className="action-button"
                onClick={() => setEdit(false)}
              />
              {user.map((item) => (
                <div key={item._id} className="card">
                  <div>
                    <input
                      style={{ marginLeft: "100px", fontSize: "20px" }}
                      className="choseFile"
                      type="file"
                      name="avatar"
                      onChange={handleChangeAvatar}
                    />
                    <br />
                    <progress
                      style={{ marginLeft: "100px" }}
                      value={progress}
                      max="100"
                    />
                    <Button
                      className="add"
                      colorScheme="teal"
                      variant="ghost"
                      onClick={handleUploadAvatar}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <Stack direction="row" spacing={4}>
          <Spinner size="xl" />
        </Stack>
      )}
    </>
  );
}
export default Profile;
