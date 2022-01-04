import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spinner, Stack} from "@chakra-ui/react";

//////////////////////////////////////////////////////////////////////////////////

const Profile = () => {

  let navigate = useNavigate();
  const state = useSelector((state) => {
    return state;
  });
  const [user, setuser] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  useEffect(() => {
    // getAllLikes();
    getTheUser();
  }, []);

  //////////////////////////////////////////////////////////////////////////////////

  const getTheUser = async () => {

      const user = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/users/${state.signIn.userID}`,
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      console.log(user.data);
      setuser(user.data);

    //////////////////////////////////////////////////////////////////////////////////

      // const getAllLikes = await axios.get(
      //   `${process.env.REACT_APP_BASE_URL}/likes//:onProduct${state.signIn.userID}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${state.signIn.token}`,
      //     },
      //   }
      // );
      // console.log(userLikes.data);
      // setUserLikes(userLikes.data);
  };

  //////////////////////////////////////////////////////////////////////////////////

  // const goInside = (id) => {
  //   navigate(`/Home/post/${id}`);
  // };
  //////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div>
        {user && user[0] ? (
          <>
            <div className="contenerImg">
              <div className="workPls">
                <div className="borderImg">
                  <img className="othersImg" src={user[0].avatar} alt="img" />
                </div>
              </div>
              <h3 className="name"> name : {user[0].name} </h3>
              <h3 className="name"> username : {user[0].username} </h3>
              <h3 className="name"> email : {user[0].email} </h3>
              <h3 className="name"> city :{user[0].city} </h3>
              <h3 className="name"> street :{user[0].street} </h3>
            </div>
          </>
        ) : (
          <Stack direction="row" spacing={4}>
            <Spinner size="xl" />
          </Stack>
        )}
      </div>

      {/* <div>
        {userLikes && (
          <>
            {userLikes.length ? (
              <div className="allImg">
                {userLikes.map((item) => (
                  <>
                    <h4
                      key={item._id}
                      className="profileDes"
                      onClick={() => goInside(item._id)}
                    >
                      {item.description}
                      {item.image && (
                        <p className="photoPlusProfile"> + Photo </p>
                      )}
                    </h4>
                  </>
                ))}
              </div>
            ) : (
              <p className="noPosted">
                NOTHING LIKED: <br />
                <br />
              </p>
            )}
          </>
        )}
      </div> */}
    </>
  );
};
export default Profile;
