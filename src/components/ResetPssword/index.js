import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { Input, Button, Stack } from "@chakra-ui/react";

const Reset = () => {
  let navigate = useNavigate();
  const [code, setCode] = useState("");
  const [newPass, setNewPass] = useState("");
  const [message, setMessage] = useState("");

  const restPass = async () => {
    const result = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/user/resetPassword`,
      { resetLink: code, newPassword: newPass }
    );
    if (result.status === 200) {
      navigate(`/Login`);
    } else {
      setMessage(result.data);
    }
  };

  return (
    // <div className="forgetPasswordPage">
    <div className="resetPassworContent1">
      <Stack spacing={3}>
        <Input
          placeholder="the Code"
          size="lg"
          className="InputforgetPassword"
          type="text"
          placeholder=" Enter The Code"
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <Input
          size="lg"
          className="password"
          type="password"
          placeholder="New Password"
          onChange={(e) => {
            setNewPass(e.target.value);
          }}
        />
        <Button variant="ghost" className="ResetBtn">
          Reset
        </Button>
      </Stack>
      {message}
    </div>

    // </div>
  );
};

  <Input placeholder='large size' size='lg' />
export default Reset;
