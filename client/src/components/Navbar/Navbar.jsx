import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import logo from "../../images/recipezLogo.png";

const Navbar = (props) => {
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName authLink">
        <img 
        src={logo} 
        alt="logo" 
        style={{
          width: `${1072 / 6}px`, 
          height: `${465 / 6}px`, 
          backgroundColor: "#fff",
          border: "10px solid #dededeb6", 
          borderRadius: "50%",
          borderRight: "12px solid ",
          borderLeft: "10px solid ",
          borderTop: "10px solid ",
          borderBottom: "10px solid ",
          transform: "none",
        }}
        />
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
