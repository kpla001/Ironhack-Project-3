import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import RandomRecipe from "../RandomRecipe/RandomRecipe";
import apiService from "../../services/apiService";

export default class Home extends Component {
  state = {
    randomRecipes: [],
  };

  componentDidMount() {
    apiService.getRandomRecipeFromApi().then((data) => {
      //console.log(data.data.recipes);
      this.setState({
        randomRecipes: data.data.recipes,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="toppage">
          <div className="landing">
            <h1>Welcome to Recipez!</h1>
            <h3>Come Find Your Flavor</h3>
            <Link to="/search">
              <button className="search_button" link="/search">
                Search for Recipes!
              </button>
            </Link>
          </div>
          <div className="aside">
            Sunt incididunt adipisicing duis ipsum est est esse eu mollit anim
            velit cillum. Exercitation ipsum officia pariatur ipsum pariatur. In
            ullamco esse occaecat Lorem id culpa mollit culpa.
            <br></br>
            <br></br>
            Here goes our statement info
          </div>
        </div>
        <div className="bottompage">
          {this.state.randomRecipes.map((randomRecipe, i) => (
            <div key={i} className="randomCard">
              {console.log(randomRecipe)}
              <div>
                <img
                  src={`${randomRecipe.image}`}
                  alt="Random Img"
                  width="300px"
                  className="randomPic"
                ></img>
              </div>
              <div>
                <Link to={`recipe-details/${randomRecipe.id}`}>
                  {`${randomRecipe.title}`}
                </Link>
              </div>
              <div>Preparation time: {randomRecipe.readyInMinutes} minutes</div>
              <div>Servings: {randomRecipe.servings}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
