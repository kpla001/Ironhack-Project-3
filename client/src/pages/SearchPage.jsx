import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Search from "../components/Search/Search";
import RecipeResults from "../components/SearchResults/RecipeResults";
import apiService from "../services/apiService";

class SearchPage extends Component {
  state = {
    searchResults: null,
    recipeResults: [],
    // ingredientResults: [],
  };

  componentDidMount() {
    // this.setState({
    //   searchResults: null,
    // })
  }

  //   searchHandler = (input) => this.setState({
  //     searchResults: input
  //   },
  // )

  //   searchRecipes = () => apiService.getRecipesFromApi(this.state.searchResults.input).then((results) => {
  //     console.log(results.data.results);
  //     this.setState({
  //         recipeResults: results.data.results,
  //     })
  //   })

  searchHandler = async (input) => {
    try {
      // console.log(input)
      const results = await apiService.getRecipesFromApi(input);
      console.log(results.data.results);
      this.setState({
        recipeResults: results.data.results,
        searchResults: input,
      });
    } catch (err) {
      // console.log(err)
    }
  };

  render() {
    // console.log("search submitted:", this.state.searchResults)
    return (
      <div className="searchPage">
        <br />
        <Search submitSearch={this.searchHandler} />
        <br />
        {!!this.state.searchResults && (
          <div>
            <h2>Results for search "{`${this.state.searchResults}`}":</h2>
            <RecipeResults results={this.state.recipeResults} />
          </div>
        )}
      </div>
    );
  }
}

export default SearchPage;
