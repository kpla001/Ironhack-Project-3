import React, { Component } from 'react';
import logo from "../logo.svg";
import "../App.css";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";

class HomePage extends Component {
  state ={
    searchResults: null,
  }
  
  // componentDidMount() {
  //   this.setState({
  //     searchResults: null,
  //   })
  // }
  
  searchHandler = (input) => this.setState({
    searchResults: input
  })


  render(){
    // console.log("search submitted:", this.state.searchResults)
    return (
      <div className="home-page">

        {!this.state.searchResults && 
        <div>
        <Home />
        </div>
        }
        <Search submitSearch={this.searchHandler} />
        

        {!!this.state.searchResults && 
        <div>
        search results
        </div>
        }
      </div>
    )
  }
}

export default HomePage;
