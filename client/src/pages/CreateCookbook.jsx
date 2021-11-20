import React, { Component } from 'react'
import axios from 'axios'
import Cookbooks from '../components/Cookbooks/Cookbooks'

export default class CreateCookbook extends Component {
  saveCookBookToDb = cookbook => {
    console.log(this)
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/cookbooks`, {
        title: `${this.props.user.username}'s Cookbook`,
        author: this.props.user._id,
      })
      .then(cookbook => {
        console.log(cookbook)
      })
  }
  render() {
    const usercookbooks = this.props.user.cookbooks
    const userMap = usercookbooks.map(data => {
      return data
    })

    return (
      <div>
        {console.log(this)}
        <button onClick={this.saveCookBookToDb}>save</button>
      </div>
    )
  }
}
