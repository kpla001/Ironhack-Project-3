import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import logo from "../../images/recipezLogo.png";

const Navbar = (props) => {
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        <img src={logo} alt="logo" 
        style={{
          width: `${1072 / 5}px`, 
          height: `${465 / 5}px`, 
          backgroundColor: "beige", 
          borderRadius: "50%",
        }}></img>
      </Link>

      <div className="nav__authLinks">
        <Link to="/search" className="authLink">
          {" "}
          Search{" "}
        </Link>
        {props.user ? (
          <>
            {/* <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link> */}
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Profile
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
