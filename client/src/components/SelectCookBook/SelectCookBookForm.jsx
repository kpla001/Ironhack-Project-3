import React, { Component } from 'react'

export default class SelectCookBookForm extends Component {
    state = {
        value: this?.props?.userCookBookData && this?.props?.userCookBookData[0]?._id,
    }




    onChangeHandler = (event) => {
        let { value } = event.target;

        this.setState(
            { 
                value: value
            }
            
        );

        this.selectionHandler(value)
    }

    selectionHandler = (value) => {
        this.props.selectionHandler(value)
    }


    render() {
        console.log("🚀 ~ file: SelectCookBookForm.jsx ~ line 31 ~ SelectCookBookForm ~ render ~ this.props", this.props)
        console.log("🚀 ~ file: SelectCookBookForm.jsx ~ line 32 ~ SelectCookBookForm ~ render ~ this.state", this.state)
        return (
        <>
            <select id="cookBooks" name="cookBookList" onChange={this?.onChangeHandler} value={this.state?.value}>
                {!!this.props?.userCookBookData && this.props?.userCookBookData.map((cookBook, i) => (
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
