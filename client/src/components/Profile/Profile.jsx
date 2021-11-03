import React, { Component } from 'react';
import './Profile.css';
import service from '../../services/service';

export default class Profile extends Component {
    state = {
        ingredients: null,
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
