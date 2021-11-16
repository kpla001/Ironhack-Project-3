import React, { Component } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import SelectCookBook from "../components/SelectCookBook/SelectCookBook";
import apiService from "../services/apiService";
import service from "../services/service";

export default class DetailsPage extends Component {
  state = {
    user: this.props.user,
    recipe: null,
    selectedRecipe: null,
    selectedCookBookId: null,
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    apiService.getRecipeDetailsFromApi(this.props)
    .then((recipeFromApi) => {
      // console.log(recipeFromApi.data)
      this.setState({
        recipe: recipeFromApi.data,
      });
    })
    .catch((error) => {console.error(error)});
  }

  handleRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe, currentPage: 1 });
  };

  handleCookBookSelect = (cookBookId) => {
    this.setState({ selectedCookBookId: cookBookId })
  }

  saveRecipe(recipe, cookbookId, user) {
    // console.log("look here--------------", recipe)
    const recipeData = {
      // ...recipe,
      name: recipe.title,
      spoonacularId: recipe.id,
      ingredients: recipe.extendedIngredients.map((ingredient) => {
        return {
          name: ingredient.name,
          spoonacularId: `${ingredient.id ? ingredient.id : Date.now()}`,
          image: ingredient.image,
        };
      }),
      directions: recipe.analyzedInstructions,
      image: recipe.image,
      calories: recipe.nutrition.nutrients[0].amount,
      cuisines: recipe.cuisines,
      dairyFree: recipe.dairyFree,
      dishTypes: recipe.dishTypes,
      glutenFree: recipe.glutenFree,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      vegan: recipe.vegan,
      vegetarian: recipe.vegetarian,
    };

    // console.log({ recipeData });
    
    
    service.saveRecipe(recipeData)

    // this.saveRecipeToCookBook(recipeData, cookbookId)

    // .then((data) => {
    //   return (
    //     <div className="savedBanner">
    //       {`${data.name} saved to profile`}
    //     </div>
    //   )
    // });
  }

  saveRecipeToCookBook(recipe, cookBookId, user) {
    // console.log("look here--------------", {recipe}, {cookBookId}, {user})
    
    const recipeData = recipe;
    const userData = user;
    const userId = userData._id;
    service.saveRecipeToCookBook(recipeData, userId, cookBookId);

    // .then((data) => {
    //   return (
    //     <div className="savedBanner">
    //       {`${data.name} saved to profile`}
    //     </div>
    //   )
    // });
  }

  render() {
    // console.log(this.state?.recipe)
    // console.log("props:",this.props)
    // console.log(this.props.user)
    return (
      <div className="detailsPage">
        <br />
        <RecipeDetails recipe={this.state.recipe} />

        {this.props.user && (
          <SelectCookBook 
          user={this.state.user} 
          saveRecipeToCookBook={this.saveRecipeToCookBook} 
          recipe={this.state.recipe}
          cookBookSelectionHandler={this.handleCookBookSelect}
          />
        )}

        {/* {this.props.user && (
          <button onClick={() => this.saveRecipe(this.state.recipe)}>
            {<b>Save Recipe</b>}
          </button>
        )} */}
        {this.props.user && (
          <button onClick={() => this.saveRecipe(this.state.recipe)}>
            {<b>Save Recipe</b>}
          </button>
        )}
      </div>
    );
  }
}
