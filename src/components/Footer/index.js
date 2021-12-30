import "./style.css";
import React from "react";
import { ImTwitter, ImInstagram, ImFacebook2, ImYoutube } from "react-icons/im";
const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li id="LiFooter">
          <a href="">
            <ImTwitter className="icon" />
          </a>
        </li>

        <li id="LiFooter">
          <a href="">
            <ImInstagram className="icon" />
          </a>
        </li>

        <li id="LiFooter">
          <a href="">
            <ImYoutube className="icon" />
          </a>
        </li>

        <li id="LiFooter">
          <a href="">
            <ImFacebook2 className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
