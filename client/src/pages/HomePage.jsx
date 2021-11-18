import React, { Component } from "react";
import Home from "../components/Home/Home";
import "./auth.css";
import { Link } from "react-router-dom";
import GitHub from "../images/GitHub-Mark-32px.png";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="landingPage">
          <Home />
        </div>
          <div className="footnote">
            <div className="credits">
              <b>Made By: Kyle Pla, Michael Rodiles, and Rodrigo Gonzalez</b>
            </div>
            <a href="https://github.com/kpla001/Ironhack-Project-3">
              <i className="fab fa-github fa-2x"></i> 
            </a>
          </div>
      </>
    );
  }
}
