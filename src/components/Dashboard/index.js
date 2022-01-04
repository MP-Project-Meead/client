import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import { Spinner, Stack, Divider, Center } from "@chakra-ui/react";
////////////////////////////////////////////////////////////////////////////////////////////////////


const Users = () => {
  
  let navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  const state = useSelector((state) => {
    return state;
  });

  const getAllUsers = async () => {
    const users = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/user/allusers`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );
    setAllUsers(users.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/user/delete/?_id=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );
    getAllUsers();
  };

  const goInside = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="usersContener">
      <h1 className="UsersText"> Users</h1>
      <Center height="50px">
        <Divider orientation="vertical" h="100px"/>
      </Center>

      {allUsers &&
        allUsers.map((ele) => {
          return (
            <div key={ele._id} className="userss">
              <div className="imgContener0">
                <img
                  className="img3"
                  src={ele.img}
                  alt="img"
                  onClick={() => {
                    goInside(ele._id);
                  }}
                />
              </div>

              <h4
                className="userName"
                onClick={() => {
                  goInside(ele._id);
                }}
              >
                {ele.username}
              </h4>
              <button
                className="deleteBtn2"
                onClick={() => deleteUser(ele._id)}
              >
                {" "}
                delete{" "}
              </button>
            </div>
          );
        })}

      {!allUsers.length && (
        <Stack direction="row" spacing={4}>
          <Spinner size="xl" />
        </Stack>
      )}
    </div>
  );
};

export default Users;
