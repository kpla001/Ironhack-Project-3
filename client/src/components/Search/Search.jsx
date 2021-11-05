import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
    state = {
        input: '',
    }

    onChangeHandler = event => {
        // console.log(event.target.value);

        let { name, value } = event.target;
        
        // console.log(name, value);

        this.setState({
            [name]: value
        }, () => console.log("state in onChangeHandler: ", this.state))
    }

    onSubmitHandler = event => {
        event.preventDefault();

        console.log(this.props)
        
        // console.log("state in onSubmitHandler", this.state);

        this.props.submitSearch(this.state)

        this.setState({
            input: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                    name="input" 
                    type="text"
                    value={this.state.input}
                    placeholder="Type in a recipe or ingredient"
                    onChange={this.onChangeHandler}
                    />
                        <button>search</button>
                </form>
            </div>
        )
    }
}
