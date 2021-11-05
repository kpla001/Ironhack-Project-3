import React, { Component } from 'react';
import Search from '../Search/Search';

export default class Home extends Component {
    state = {
        searchResults: '',
    }

    searchHandler = (input) => this.setState({
        searchResults: input
    })

    render() {
        console.log("search submitted:", this.state.searchResults.input)
        return (
            <div>
                This is the homepage
                
                <Search submitSearch={this.searchHandler} />
            </div>
        )
    }
}
