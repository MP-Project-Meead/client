import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  let navigate = useNavigate();
  const state = useSelector((state) => {
    return state;
  });
  const [user, setuser] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  useEffect(() => {
    getAllLikes();
  }, []);

  const getUser = async () => {
    const user = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/user/${state.signIn.userID}`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );
    setuser(user.data);

    const liked = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/likes/userliked/${state.signIn.userID}`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );
    setUserLikes(userLikes.data);
  };

  const goInside = (id) => {
    navigate(`/Home/post/${id}`);
  };

  return (
    <>
      <div>
        {user && user[0] ? (
          <>
            <div className="contenerImg">
              <div className="workPls">
                <div className="borderImg">
                  <img className="othersImg" src={user[0].img} alt="img" />
                </div>
                <div> </div>
              </div>
              <h3 className="name"> {user[0].username} </h3>
            </div>
          </>
        ) : (
          <h1>loading ...</h1>
        )}
      </div>

      <div>
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
                      {item.describe}
                      {item.img && (
                        <p className="photoPlusProfile"> + Photo </p>
                      )}
                    </h4>
                  </>
                ))}
              </div>
            ) : (
              <p className="noPosted">You don't have any post yet :</p> )}
          </>
        )}
      </div>
    </>
  );
};
export default Profile;
