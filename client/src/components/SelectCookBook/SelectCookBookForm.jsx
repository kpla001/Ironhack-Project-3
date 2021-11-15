import React, { Component } from 'react'

export default class SelectCookBookForm extends Component {
    state = {
        value: this.props.userCookBookData ? this?.props.userCookBookData[0]._id : null,
    }

    onChangeHandler = (event) => {
        let { name, value } = event.target;

        this.setState(
            { 
                value: value
            }
            
        );
    }

    // selectionHandler = (input) => {

    // }


    render() {
        console.log(this.state.value)
        return (
        <>
            <select id="cookBooks" name="cookBookList" onChange={this.onChangeHandler} value={this.state.value}>
                {!!this.props.userCookBookData && this.props.userCookBookData.map((cookBook) => (
                    <option 
                    key={cookBook?._id} 
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
