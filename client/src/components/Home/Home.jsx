import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home_search">
        <h1>Welcome to Recipez!</h1>
        <h3>Come Find Your Flavor</h3>
        <Link to="/search">
          <button className="search_button" link="/search">
            Search
          </button>
        </Link>
      </div>
    );
  }
}
