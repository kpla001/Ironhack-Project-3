import React, { Component } from 'react';
import logo from "../logo.svg";
import "../App.css";
import Home from "../components/Home/Home";

class HomePage extends Component {
  state ={
    searchResults: '',
  }
  render(){
    return (
      <div className="home-page">
        <Home />
      </div>)
  }
}

export default HomePage;
