import React, { Component } from 'react'

export default class SelectCookBookForm extends Component {
    state = {
        cookBooks: this?.props?.userCookBookData,
    }




    onChangeHandler = (event) => {
        let { value } = event.target;

        this.setState(
            { 
                cookBooks: value
            }
            
        );

        this.selectionHandler(value)
    }

    selectionHandler = (value) => {
        this.props.selectionHandler(value)
    }


    render() {
        console.log(this.state)
        console.log(this.props.userCookBookData)
        console.log(this.state.cookBooks[0])
        return (
        <>
            <select id="cookBooks" name="cookBookList" onChange={this.onChangeHandler} value={this.state.cookBooks[0]}>
                {!!this.props.userCookBookData && this.props.userCookBookData.map((cookBook, i) => (
                    <option 
                    key={i} 
                    value={cookBook?._id}
                    >
                        {`${cookBook?.title}`}
                    </option> 
                ))}
            </select>
        </>
        )
    }
}