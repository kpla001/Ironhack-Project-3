import React, { Component } from "react";
import "../App.css";
import Search from "../components/Search/Search";

class SearchPage extends Component {
  state = {
    searchResults: null,
  };

  // componentDidMount() {
  //   this.setState({
  //     searchResults: null,
  //   })
  // }

  searchHandler = (input) =>
    this.setState({
      searchResults: input,
    });

  render() {
    // console.log("search submitted:", this.state.searchResults)
    return (
      <div className="searchPage">
        {!this.state.searchResults && <div></div>}
        <Search submitSearch={this.searchHandler} />

        {!!this.state.searchResults && <div>search results</div>}
      </div>
    );
  }
}

export default SearchPage;
