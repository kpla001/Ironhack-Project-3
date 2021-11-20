import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import * as PATHS from '../../utils/paths'
import * as CONSTS from '../../utils/consts'
import logo from '../../images/recipezLogo.png'

const Navbar = props => {
  return (
    <nav className="nav">
      <Link to={PATHS.HOMEPAGE} className="nav__projectName authLink">
        <img
          src={logo}
          alt="logo"
          style={{
            width: `${1072 / 6}px`,
            height: `${465 / 6}px`,
            backgroundColor: '#fff',
            paddingLeft: '0.5em',
            border: '14px',
            borderColor: 'rgba(221, 221, 221, 0.753)',
            borderRadius: '50%',
            borderStyle: 'ridge groove groove ridge',
            margin: '0.1em 2em 0.1em 2em',
          }}
        />
      </Link>

      <div className="nav__authLinks">
        <Link to="/search" className="authLink">
          {' '}
          Search{' '}
        </Link>
        {props.user ? (
          <>
            {/* <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link> */}
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Profile
            </Link>
            <button className="authLink nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink nav-loginbtn">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
