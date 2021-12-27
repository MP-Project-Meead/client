import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";

//////////////////////////////////////////////////////////////////////////////////////
const Nav = () => {
  
  let navigate = useNavigate();
  function logout() {
    navigate(`/`);
    localStorage.removeItem("userId");
    window.location.reload(false);
  }
  function hide() {
    window.location.reload(false);
  }

//////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="containerNav">
      <ul className="ulNav">
        <li className="lii">
          <h4>
            {localStorage.getItem("userId") ? (
              <Link
                className="linkk"
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                logout
              </Link>
            ) : (
              ""
            )}
          </h4>
        </li>

        <li className="lii">
          <h4 className="icon">
            {localStorage.getItem("userId") ? (
              <Link
                className="linkk"
                to="/bookMark"
                onChange={() => {
                  hide();
                }}
              ></Link>
            ) : (
              ""
            )}
          </h4>
        </li>
        <li className="lii">
          <h4>
            {localStorage.getItem("userId") ? (
              <Link
                className="linkk"
                to="/profile"
                onChange={() => {
                  hide();
                }}
              >
                Profile
              </Link>
            ) : (
              ""
            )}
          </h4>
        </li>

        {localStorage.getItem("userId") ? (
          ""
        ) : (
          <li className="lii" id="linkk3">
            <h4>
              <Link
                className="linkk"
                to="/Signup"
                onChange={() => {
                  hide();
                }}
              >
                Signup
              </Link>
            </h4>
          </li>
        )}

        <li className="lii">
          <h4>
            <Link className="linkk" to="/">
              Home
            </Link>
          </h4>
        </li>
        <li className="lii">
          <h4>
            <Link className="linkk" to="/Category">
              Category
            </Link>
          </h4>
        </li>

        <li className="lii">
          <h4>
            <Link className="linkk" to="/FAQs">
              FAQs
            </Link>
          </h4>
        </li>

        <li className="lii">
          <h4>
            <Link className="linkk" to="/ContactUs">
              ContactUs
            </Link>
          </h4>
        </li>

        <li className="lii">
          <h4>
            <Link id="firstli" className="linkk" to="/AboutUs">
              AboutUs
            </Link>
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
