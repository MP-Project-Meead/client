import React from "react";
import "./style.css";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
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
            rel="noreferrer"
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
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/meead-alotaibi/"
            className="socaialIcons"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <h4
          style={{
            color: "#8f7533",
            fontFamily:
              "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
          }}
        >
          Luxury - 2022
        </h4>
      </div>
    </div>
  );
};

export default Footer;
