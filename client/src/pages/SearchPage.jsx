import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Search from "../components/Search/Search";
import RecipeResults from "../components/SearchResults/RecipeResults";
import LoadingComponent from "../components/Loading/index";
import apiService from "../services/apiService";


class SearchPage extends Component {
  state = {
    searchResults: null,
    recipeResults: [],
    locationState: this.props.location.state,
    isLoading: false,
    currentPage: 1,
    pageSize: 20,

    // ingredientResults: [],
  };

  componentDidMount() {
      if (this.props.history.action === "POP") {
        this.setState({
          searchResults: this.state.locationState?.searchResults,
          recipeResults: this.state.locationState?.recipeResults,
        })
      }
    
  }



  searchHandler = async (input) => {
    try {
      // console.log(input)
      const results = await apiService.getRecipesFromApi(input);

      this.props.location.search = `${input}`;
      // this.props.match.path = `/search?=${input}`;
      // this.props.params.input = input;
      
      // console.log(results.data.results);
      this.setState({
        searchResults: input,
        recipeResults: results.data.results,
        locationState: {
          searchResults: input,
          recipeResults: results.data.results,
        }
      });

      this.props.history.push(`/search?=${input}`, this.state.locationState);
    } catch (err) {
      // console.log(err)
    }
  };

  render() {
    console.log(this.props)
    // const search = this.props.location.search;
    // const  name = new URLSearchParams(search).get(this.state.searchResults);

    return (
      <div className="searchPage">
        <br />
        <Search submitSearch={this.searchHandler} />
        <br />
        {this.state.isLoading === true && this.state.searchResults ? (
          <LoadingComponent />
        ) : null}
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
