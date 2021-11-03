import React, { Component } from 'react';
import './Profile.css';
import service from '../../services/service';
import Ingredients from '../Ingredients/Ingredients';

export default class Profile extends Component {
    state = {
        ingredients: [],
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
                <Ingredients ingredients={this.state.ingredients}/>
            </div>
        )
    }
}
