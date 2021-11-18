import React, { Component } from "react";
import Home from "../components/Home/Home";
import "./auth.css";
import { Link } from "react-router-dom";
import GitHub from "../images/GitHub-Mark-32px.png";

export default class HomePage extends Component {
  render() {
    return (
      <div className="landingPage">
        <Home />
        <div className="footnote">
          <b>Made By: Kyle Pla, Michael Rodiles, and Rodrigo Gonzalez</b>
          <a href="https://github.com/kpla001/Ironhack-Project-3">
            <img src={GitHub} alt="GitHub Logo" />
          </a>
        </div>
      </div>
    );
  }
}
