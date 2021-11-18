import React, { Component } from "react";
import "./Profile.css";
import service from "../../services/service";
import Ingredients from "../Ingredients/Ingredients";
import Recipe from "../Recipe/Recipe";
import Cookbooks from "../Cookbooks/Cookbooks";
import UserCookbooks from "../UserCookBook/userCookbooks";
import { Link } from "react-router-dom";
import axios from "axios";

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

    console.log(this.props.user.cookbooks); ////////////////
  }
  //<Ingredients ingredients={this.state.ingredients} />
  //<Recipe recipes={this.state.recipes} />

  saveCookBookToDb = (cookbook) => {
    console.log(this);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/cookbooks`, {
      title: `${this.props.user.username}'s Cookbook`,
      author: this.props.user._id,
    });
  };

  render() {
    // console.log(this.props.user);
    //------------------------------------Line 49 link needs title{this.props.cookbooks.title}
    return (
      <div>
        <main className="container">
          <UserCookbooks user={this.props.user} />
          <h1>Welcome, {this.props.user.username}</h1>
          <div className="userCookbooks">
            Cookbooks:
            <Link to="/">{this.props.cookbooks}</Link>
            <br></br>
            <button onClick={this.saveCookBookToDb}>Make a Cookbook</button>
          </div>
        </main>
        {/* <Cookbooks cookbooks={this.state.cookbooks} /> */}
      </div>
    );
  }
}
