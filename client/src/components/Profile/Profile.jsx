import React, { Component } from "react";
import "./Profile.css";
import service from "../../services/service";
import Ingredients from "../Ingredients/Ingredients";
import Recipe from "../Recipe/Recipe";
// import Cookbooks from "../Cookbooks/Cookbooks";
import UserCookbooks from "../UserCookBook/userCookbooks";

export default class Profile extends Component {
  state = {
    ingredients: [],
    recipes: [],
    cookbooks: [],
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

    console.log(this.props.cookbooks); ////////////////
  }
  //<Ingredients ingredients={this.state.ingredients} />
  //<Recipe recipes={this.state.recipes} />

  saveCookBookToDb(cookbook) {
    console.log(cookbook);
  }

  render() {
    // console.log(this.props.user);
    return (
      <div>
        <main className="container">
          <UserCookbooks user={this.props.user} />
          <button onClick={this.saveCookBookToDb(this.state.cookbook)}>
            {console.log(this.state)}
            Make a Cookbook
          </button>
        </main>
        {/* <Cookbooks cookbooks={this.state.cookbooks} /> */}
      </div>
    );
  }
}
