import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import apiService from "../../services/apiService";
import recipezLogo from "../../images/recipezLogo.png"

export default class Home extends Component {
  state = {
    randomRecipes: [],
  };

  componentDidMount() {
    // apiService.getRandomRecipeFromApi().then((data) => {
    //   //console.log(data.data.recipes);
    //   this.setState({
    //     randomRecipes: data.data.recipes,
    //   });
    // });
  }

  render() {
    return (
      <div className="landingPage">
        <div className="toppage">
          <div className="landing">
            <h1>
              Welcome to 
              <img 
              src={recipezLogo} 
              alt='icon'
              style={{
                width: `${1072 / 4.5}px`, 
                height: `${465 / 4.5}px`, 
                backgroundColor: "#fff",
                paddingLeft: "0.2em",
                border: "14px", 
                borderColor: "rgba(221, 221, 221, 0.753)",
                borderRadius: "50%",
                borderStyle: "ridge groove groove ridge",
                margin: "0.1em 2em 0.1em 0.2em",
              }}
              />
            </h1>
            <h3>Come Find Your Flavor</h3>
            <br></br>
            <Link to="/search">
              <button className="search_button" link="/search">
                <b>Search for Recipes!</b>
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
                <h6 className="randomTitle"><b>{`${randomRecipe.title}`}</b></h6>
                <h6 className="randomDescription">
                  <p>🥬 <b>Preparation Time:</b> {randomRecipe.readyInMinutes} minutes</p>
                  <p>🥬 <b>Servings:</b> {randomRecipe.servings}</p>
                </h6>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
