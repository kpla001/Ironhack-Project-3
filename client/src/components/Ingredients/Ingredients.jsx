import React, { Component } from 'react';
import './Ingredients.css';
import service from '../../services/service';

export default class Ingredients extends Component {
    state = {
        ingredients: null
    };

    componentDidMount(){
        service.getIngredientsList().then((data) => {
            this.setState({
                ingredients: data.ingredients,
            });
        });
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
