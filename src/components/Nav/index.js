import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { AiOutlineLogout } from "react-icons/ai";
import { useSelector } from "react-redux";
import { logOut } from "../../reducers/login";
import { useDispatch } from "react-redux";

const Header = () => {
  let navigate = useNavigate();
  const dispatchEvent = useDispatch();

  const state = useSelector((state) => {
    return state;
  });

  const logout = () => {
    const data = {
      role: "",
      token: "",
      userID: "",
    };
    dispatchEvent(logOut(data));
    navigate(`/`);
  };

  return (
    <>
      <div className="nav">
        <ul>
          <li className="lie" id="homeNav">
            <Link className="link" to="/signUp">
              Signup
            </Link>
          </li>
          <li className="lie" id="homeNav">
            <Link className="link" to="/Jewelry">
              jewelry
            </Link>
          </li>
          <li className="lie" id="homeNav">
            <Link className="link" to="/Bags">
              Bags
            </Link>
          </li>
          <li className="lie" id="homeNav">
            <Link className="link" to="/Dress">
              Dress
            </Link>
          </li>
          <li className="lie" id="homeNav">
            <Link className="link" to="/Shoes">
              Shoes
            </Link>
          </li>
          <li className="lie" id="homeNav">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="lie" id="homeNav">
            <Link className="link" to="/FAQs">
              FAQs
            </Link>
          </li>
          {state.signIn.role === "61c42c3139940ec8e18224d0" && (
            <li className="lie">
              <span className="link" onClick={logout}>
                <AiOutlineLogout />
              </span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
