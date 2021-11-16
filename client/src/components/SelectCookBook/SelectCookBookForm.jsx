import React, { Component } from 'react'

export default class SelectCookBookForm extends Component {
    state = {
        value: this.props.userCookBookData ? this?.props.userCookBookData[0]._id : null,
    }

    componentDidMount(){
        this.selectionHandler()
    }


    onChangeHandler = (event) => {
        let { value } = event.target;

        this.setState(
            { 
                value: value
            }
            
        );

        this.selectionHandler()
    }

    selectionHandler = () => {
        this.props.selectionHandler(this.state.value)
    }


    render() {
        console.log(this.props.userCookBookData)
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
