import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
  // AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fulldiv">
        <div className="navStart">
          <a href="hhttps://twitter.com/MeeadAlotaibi" className="socaialIcons">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.instagram.com/meed77/" className="socaialIcons">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/MeeadAlotaibi" className="socaialIcons">
            <AiFillGithub />
          </a>
        </div>

        <h4
          style={{
            color: "white",
            fontFamily:
              "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
          }}
        >
          Luxury - 2021
        </h4>
      </div>
    </div>
  );
};

export default Footer;
