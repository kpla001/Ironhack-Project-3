import React, { userEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Search({ submitSearch, isLoadingHandler }) {
    const [input, setInput] = useState("")

    const onChangeHandler = (event) => {
        let { name, value } = event.target;

        setInput(value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
    
        // console.log(this.props)
    
        // console.log("state in onSubmitHandler", this.state);
    
        submitSearch(input);
    
        setInput("")
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    name="input"
                    type="text"
                    value={input}
                    placeholder="Type in a recipe or ingredient"
                    onChange={onChangeHandler}
                />
                <button type="submit" onClick={() => {isLoadingHandler(true) }} href="/search-results">search</button>
            </form>
        </div>
    )
}
