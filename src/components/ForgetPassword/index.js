import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {Input} from "@chakra-ui/react"

const Forget = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState("");
  

  const restPass = async () => {
    const result = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/user/forgetPassword`,
      { email }
    );
    if (result.status === 200) {
      //pass
      navigate(`/ResetPssword`);
    } else {
      setMessage(result.data);
    }
  };
  

  return (
    <div className="forgetPasswordPage">
      <div className="forgetPassworContent">
        <Input
          size="lg"
          className="InputforgetPassword"
          type="email"
          placeholder=" Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>
          <BsFillArrowRightCircleFill className="goIcon" onClick={restPass} />
        </button>
      </div>
      {message}
    </div>
  );
};

export default Forget;
