import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fulldiv">
        <div className="navStart">
          <a
            href="https://twitter.com/MeeadAlotaibi"
            className="socaialIcons"
            target="_blank"
          >
            <AiOutlineTwitter />
          </a>
          <a href="mailto:meeadalotaibi77@gmail.com" className="socaialIcons">
            <SiGmail />
          </a>
          <a
            href="https://github.com/MeeadAlotaibi"
            className="socaialIcons"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/meead-alotaibi/"
            className="socaialIcons"
            target="_blank"
          >
            <FaLinkedinIn />
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
