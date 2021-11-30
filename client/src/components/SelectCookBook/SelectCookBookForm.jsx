import React, { Component } from 'react'

export default class SelectCookBookForm extends Component {
  state = {
    cookBooks: this?.props?.userCookBookData,
    selectedCookBook: this?.props?.userCookBookData[0],
  }

  onChangeHandler = event => {
    let { value } = event.target

    this.setState({
      selectedCookBook: value,
    })

    this.selectionHandler(value)
  }

  selectionHandler = value => {
    this.props.selectionHandler(value)
  }

  render() {
    // console.log(this.state.selectedCookBook)

    return (
      <>
        <select
          id="cookBooks"
          name="cookBookList"
          onChange={this.onChangeHandler}
          value={this.state.selectedCookBook}
        >
          {this.props.userCookBookData.map((cookBook, i) => (
            <option key={i} value={cookBook?._id}>
              {`${cookBook?.title}`}
            </option>
          ))}
        </select>
      </>
    )
  }
}
