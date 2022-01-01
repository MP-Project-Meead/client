import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// import "./style.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { logIn } from "../../reducers/login";
import { useDispatch } from "react-redux";


const Signup = () => {
  let navigate = useNavigate();
  const dispatchEvent = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  


  const getUser = async () => {
    const users = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/signUp`,
      { name, username, email, password, role: "61c42c3139940ec8e18224d0" }
    );
    if (users.status === 204) {
      setMessage(
        "this email or username already hava an account! log in or change your data"
      );
    } else if (users.status === 210) {
      setMessage("you need to insert a complix password");
    } else {
      setMessage(users.data);
    }
    console.log(users.data);
  };
  
  
  return (
    <>
      <div className="describeItem ">
        <span className="Logg">sign up </span>
        <div>
          <div>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <input
            type="text"
            placeholder=" email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* <div>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div> */}

        <div>
          <input
            type="password"
            placeholder=" password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="LogBtn"
          onClick={() => {
            getUser();
          }}
        >
          <BsFillArrowRightCircleFill className="goIcon" />
        </button>

        <div className="already">
          already have an account?{" "}
          <Link className="linkk" to="/Login">
            log in{" "}
          </Link>
        </div>

        <div className="mesageL">{message} </div>
      </div>
    </>
  );
};

export default Signup;
