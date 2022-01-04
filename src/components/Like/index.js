import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
////////////////////////////////////////////////////////////////////////////////////////////////////

function Like() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      Login: state.Login,
    };
  });

  console.log(state);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/getLiked`,
        {
          userId: state.Login.userId,
        },
        { headers: { Authorization: `Bearer ${state.Login.token}` } }
      )
      .then((response) => {
        setUsers(
          response.data.filter((users) => users.userId == state.Login.userId)
        );
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  };

  const imageClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <h1>hi likes</h1>
      {console.log(users)}
      {users?.map((item) => (
        <>
          <p>name</p>
          <h3>{item.name}</h3>
          <img
            src={item.image}
            onClick={() => imageClick(item._id)}
          />
          ;
        </>
      ))}
    </>
  );
}

export default Like;
