import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { logIn } from "../../reducers/login";
import { useDispatch } from "react-redux";

const Login = () => {
  let navigate = useNavigate();
  const dispatchEvent = useDispatch();
  const [email, setEmail] = useState(""); //email or user
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const getUser = async () => {
    const users = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/logIn`,
      { input: email, password }
    );
    if (users.status !== 200) {
      setMessage(users.data);
    } else {
      const data = {
        role: users.data.result.role,
        token: users.data.token,
        userID: users.data.result._id,
      };
      dispatchEvent(logIn(data));
      navigate(`/`);
    }
  };

  const navForget = () => {
    navigate(`/ForgetPassword`);
  };


  return (
    <>
      <div className="describeItem">
        <span className="Logg">Log in </span>
        <div>
          <input
            type="text"
            placeholder=" email or username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <input
          type="password"
          placeholder=" password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <h6 className="forgetPass" onClick={navForget}>
          
          forget password?
        </h6>
        <button
          className="LogBtn"
          onClick={() => {
            getUser();
          }}
        >
          <BsFillArrowRightCircleFill className="goIcon" />
        </button>
        <div className="already">
          Don't have an account?
          <Link className="linkk" to="/signup">
            Sign up
          </Link>
        </div>
        <div className="mesageL">{message} </div>
      </div>
    </>
  );
};

export default Login;
