import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import apiService from "../services/apiService";
import axios from "axios";

export default class DetailsPage extends Component {
  state = {
    recipe: null,
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    apiService.getRecipeDetailsFromApi(this.props).then((recipeFromApi) => {
      // console.log(recipeFromApi.data)
      this.setState({
        recipe: recipeFromApi.data,
      });
    });
  }

  handleRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe, currentPage: 1 });
  };

  render() {
    // console.log(this.state?.recipe)
    return (
      <div>
        <br />
        <RecipeDetails recipe={this.state.recipe} />
      </div>
    );
  }
}
