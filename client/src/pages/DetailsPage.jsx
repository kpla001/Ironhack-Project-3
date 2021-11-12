import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import apiService from "../services/apiService";
import axios from 'axios';

export default class DetailsPage extends Component {
    state={
        recipe: null
    }

    componentDidMount(){
        apiService.getRecipeDetailsFromApi(this.props).then(recipeFromApi => {
            // console.log(recipeFromApi.data)
            this.setState({
                recipe: recipeFromApi.data,
            })
        })

    }

    render() {
        // console.log(this.state?.recipe)
        return (
            <div>
                <br/>
                <RecipeDetails recipe={this.state.recipe} />
            </div>
        )
    }
}
