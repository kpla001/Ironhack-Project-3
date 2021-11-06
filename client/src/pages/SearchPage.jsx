import React, { Component } from "react";
import "../App.css";
import Search from "../components/Search/Search";
import apiService from "../services/apiService";

class SearchPage extends Component {
  state = {
    searchResults: null,

  }
  
  componentDidMount() {
    this.setState({
      searchResults: null,
    })
  }
  
  searchHandler = (input) => this.setState({
    searchResults: input
  })

  searchRecipes = () => apiService.getRecipesFromApi(this.state.searchResults.input)
  .then((results) => {
    console.log(results.data.results)

  })
  .catch((err) => err)



  render() {
    // console.log("search submitted:", this.state.searchResults)
    return (
      <div className="searchPage">
        <Search submitSearch={this.searchHandler} />

        {!!this.state.searchResults && 
        <div>
        {[this.searchRecipes()]}
        </div>
        }
        
      </div>
    );
  }
}

export default SearchPage;
