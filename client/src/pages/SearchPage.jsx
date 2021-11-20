import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import SearchFunction from '../components/Search/SearchFunction'
import RecipeResults from '../components/SearchResults/RecipeResults'
import LoadingComponent from '../components/Loading/index'
import Pagination from '../components/common/pagination'
import apiService from '../services/apiService'
import { paginate } from '../utils/paginate'
import _ from 'lodash'

class SearchPage extends Component {
  state = {
    searchResults: null,
    recipeResults: [],
    locationState: this.props.location.state,
    isLoading: false,
    currentPage: 1,
    pageSize: 10,

    // ingredientResults: [],
  }

  componentDidMount() {
    if (this.props.history.action === 'POP') {
      this.setState({
        searchResults: this.state.locationState?.searchResults,
        recipeResults: this.state.locationState?.recipeResults,
      })
    }
  }

  searchHandler = async input => {
    try {
      // console.log(input)
      const results = await apiService.getRecipesFromApi(input)

      this.props.location.search = `${input}`
      // this.props.match.path = `/search?=${input}`;
      // this.props.params.input = input;

      // console.log(results.data.results);
      this.setState({
        searchResults: input,
        recipeResults: results.data.results,
        isLoading: false,
        locationState: {
          searchResults: input,
          recipeResults: results.data.results,
        },
      })

      this.props.history.push(`/search?=${input}`, this.state.locationState)
    } catch (err) {
      // console.log(err)
    }
  }

  isLoadingHandler = status => {
    this.setState({
      isLoading: status,
    })
  }

  handlePageChange = page => {
    this.setState({
      currentPage: page,
    })
  }

  render() {
    console.log(this.props)
    // const search = this.props.location.search;
    // const  name = new URLSearchParams(search).get(this.state.searchResults);

    const paginatedRecipes = paginate(
      this.state?.recipeResults,
      this.state.currentPage,
      this.state.pageSize,
    )

    return (
      <div className="searchPage">
        <br />

        <SearchFunction
          submitSearch={this.searchHandler}
          isLoadingHandler={this.isLoadingHandler}
        />

        <br />

        {this.state.isLoading === true && <LoadingComponent isLoading={this.state.isLoading} />}
        {!!this.state.searchResults && (
          <div className="resultsPage">
            <h2 classname="resultsDescription">Results for search "{`${this.state.searchResults}`}":</h2>

            <RecipeResults results={paginatedRecipes} />
            <Pagination
              id="pagination"
              className="pagination"
              itemsCount={this.state?.recipeResults.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        )}
      </div>
    )
  }
}

export default SearchPage
