import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import {
  Spinner,
  Stack,
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
} from "@chakra-ui/react";

const Users = () => {
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
      `${process.env.REACT_APP_BASE_URL}/user/delete/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );

    getAllUsers();
  };
  return (
    <div className="usersContener">
      {allUsers &&
        allUsers.map((ele) => {
          return (
            <div key={ele._id} className="userss">
              <Flex className="imgContener0">
                <Avatar className="img3" src={ele.img} alt="img" />
                <Box ml="3">
                  <Text fontWeight="bold" className="userName">
                    Name : {ele.name}
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                    <br />
                    UserName : {ele.username}
                    <br />
                    Email : {ele.email}
                  </Text>
                  <button
                    className="deleteBtn2"
                    onClick={() => deleteUser(ele._id)}
                  >
                    {" "}
                    delete{" "}
                  </button>
                </Box>
              </Flex>
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
