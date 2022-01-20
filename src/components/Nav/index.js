import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { logOut } from "../../reducers/login";
import { useDispatch } from "react-redux";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";


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
    navigate(`/Home`);
  };
  const goToProfile = () => {
    navigate(`/Profile`);
  };

  return (
    <>
      <div className="nav">
        <h1 className="luxury">Luxury</h1>

        <ul>
          {state.signIn.token.length === 0 ? (
            <li className="lie" id="homeNav">
              <Link className="link" to="/signUp">
                Signup
              </Link>
            </li>
          ) : (
            <li className="lie icons">
              <span onClick={logout}>
                <AiOutlineLogout />
              </span>
            </li>
          )}
          {state.signIn.role === "61c42c3139940ec8e18224d0" && (
            <li className="lie icons">
              <span className="iconLogut" onClick={goToProfile}>
                <BiUserCircle />
              </span>
            </li>
          )}
          {state.signIn.role === "61c4248139940ec8e18224cc" && (
            <li className="lie icons">
              <Link id="first" className="link" to="/Dashboard">
                <FaUsers />
              </Link>
            </li>
          )}
          {state.signIn.role === "61c4248139940ec8e18224cc" && (
            <li className="lie icons">
              <Link to="/NewProduct">
                <AiOutlineFileAdd />
              </Link>
            </li>
          )}
          {state.signIn.role === "61c42c3139940ec8e18224d0" && (
            <li className="lie" id="homeNav">
              <Link className="link" to="/Cart">
                Cart
              </Link>
            </li>
          )}

          <li className="lie" id="homeNav">
            <Link className="link" to="/Jewelry">
              Jewelry
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
            <Link className="link" to="/Home">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};



export default Header;
