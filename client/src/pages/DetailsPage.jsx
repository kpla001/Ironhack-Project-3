import React, { Component } from 'react';
import { Link } from "react-router-dom";
import apiService from "../services/apiService";
import axios from 'axios';

export default class DetailsPage extends Component {
    state={
        recipe: null
    }

    componentDidMount(){
        apiService.getRecipeDetailsFromApi(this.props).then(recipeFromApi => {
            console.log(recipeFromApi.data)
            this.setState({
                recipe: recipeFromApi.data,
            })
        })

    }

    render() {
        // console.log(this.props)
        return (
            <div>
                
            </div>
        )
    }
}
