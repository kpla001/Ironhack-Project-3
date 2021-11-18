import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
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
      <div className="landingPage">
        <div className="toppage">
          <div className="landing">
            <h1>Welcome to Recipez!</h1>
            <h3>Come Find Your Flavor</h3>
            <br></br>
            <Link to="/search">
              <button className="search_button" link="/search">
                Search for Recipes!
              </button>
            </Link>
          </div>
          <div className="aside">
            Our goal is to make finding your favorite recipes as easy as
            possible, without any short stories or autobiographical novels or
            <br></br>
            <i>
              "My aunt Sally used to make this recipe in the summers of the
              1800's..."
            </i>{" "}
            to dig through. Here you can search from more than
            <br></br>
            330,000 recipes from across the web.
            <br></br>
            <br></br>
            We strive to be your number one source for all your cooking recipe
            needs.
            <br></br>
            <br></br>
            <br></br>
            Please sign in or sign up to start creating your repository of
            recipes!
          </div>
        </div>
        <div className="bottompage">
          {this.state.randomRecipes.map((randomRecipe, i) => (
            <div key={i} className="randomCard">
              <Link
                to={`recipe-details/${randomRecipe.id}`}
                className="randomDescription"
              >
                <div>
                  <img
                    src={`${randomRecipe.image}`}
                    alt={`${randomRecipe.title}'s Img`}
                    width="300px"
                    className="randomPic"
                  ></img>
                </div>
                <h4 className="randomTitle">{`${randomRecipe.title}`}</h4>
                <h6 className="randomDescription">
                  Preparation time: {randomRecipe.readyInMinutes} minutes
                  <div>Servings: {randomRecipe.servings}</div>
                </h6>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
