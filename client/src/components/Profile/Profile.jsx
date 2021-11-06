import React, { Component } from "react";
import "./Profile.css";
import service from "../../services/service";
import Ingredients from "../Ingredients/Ingredients";
import Recipe from "../Recipe/Recipe";
import Cookbooks from "../Cookbooks/Cookbooks";

export default class Profile extends Component {
  state = {
    ingredients: [],
    recipes: [],
    cookbooks: [{ id: 1 }],
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
    service.getCookbookList().then((data) => {
      this.setState({ cookbooks: data.cookbooks });
    });
  }

  render() {
    return (
      <div>
        <Ingredients ingredients={this.state.ingredients} />
        <Recipe recipes={this.state.recipes} />
        <Cookbooks cookbooks={this.state.cookbooks} />
      </div>
    );
  }
}
