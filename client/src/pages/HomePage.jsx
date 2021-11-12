import React, { Component } from "react";
import Home from "../components/Home/Home";
import "./auth.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="landingPage">
        <div className="spaceTop"></div>
        <Home />
      </div>
    );
  }
}
