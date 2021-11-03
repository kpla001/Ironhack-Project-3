import React, { Component } from "react";
import "./Profile.css";
import service from "../../services/service";
import Ingredients from "../Ingredients/Ingredients";
import Recipe from "../Recipe/Recipe";

export default class Profile extends Component {
  state = {
    ingredients: [],
    recipes: [],
  };

  componentDidMount() {
    service.getIngredientsList().then((data) => {
      this.setState({
        ingredients: data.ingredients,
      });
    });
    service.getRecipeList().then((data) => {
      this.setState({
        recipes: data.recipes,
      });
    });
  }

  render() {
    return (
      <div>
        <Ingredients ingredients={this.state.ingredients} />
        <Recipe recipes={this.state.recipes} />
      </div>
    );
  }
}
