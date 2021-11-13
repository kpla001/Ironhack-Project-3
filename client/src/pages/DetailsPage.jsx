import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import apiService from "../services/apiService";
<<<<<<< HEAD
import axios from "axios";
=======
import service from "../services/service";
>>>>>>> 80e1c11584f38015cc98bbee9a5e68eb4c2d85db

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

<<<<<<< HEAD
  render() {
    // console.log(this.state?.recipe)
    return (
      <div>
        <br />
        <RecipeDetails recipe={this.state.recipe} />
      </div>
    );
  }
=======
    saveRecipeToDb(recipe){
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
                }
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

        }
        console.log({recipeData});
        service.postRecipeToDb(recipeData)

    }

    render() {
        // console.log(this.state?.recipe)
        // console.log("props:",this.props)
        return (
            <div>
                <br/>
                <RecipeDetails recipe={this.state.recipe} />
                {this.props.user && <button onClick={() => this.saveRecipeToDb(this.state.recipe)}>Save Recipe</button>}
            </div>
        )
    }
>>>>>>> 80e1c11584f38015cc98bbee9a5e68eb4c2d85db
}
