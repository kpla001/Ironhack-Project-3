import React, { Component } from 'react'
import './auth.css'
import { Link } from 'react-router-dom'
import RecipeDetails from '../components/RecipeDetails/RecipeDetails'
import SelectCookBook from '../components/SelectCookBook/SelectCookBook'
import apiService from '../services/apiService'
import service from '../services/service'
import UserCookbook from '../components/UserCookBook/userCookbooks'

export default class CookbookDetails extends Component {
  state = {
    user: this.props.user,
    cookBook: this.props.user.cookbooks,
  }

  render() {
    return <div>{console.log(this.props.user.cookbooks)}</div>
  }
}
