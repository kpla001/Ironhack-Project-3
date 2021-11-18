import React, {Component} from 'react';
import './Pagination.css';

export default class Pagination extends Component {
    state = {
        dataArray: this.props.dataArray,
        numberOfPages: this.props.dataArray ? +this.props.dataArray.length / this.props.pageSize : 0,
        pageNumberArray: [],
    }


    
    paginate() {
        for (let i = 0; i <= this.state.numberOfPages; i++) {
            this.state.pageNumberArray.push(i + 1)
        }
    }

    render(){
        this.paginate();
        console.log(this.props, this.state)
        return (
            <div className="pagination">
                <ul>
                {this.state.pageNumberArray.map(( pageNumber => (
                    <li> 
                        <b><span  
                        onClick={this.paginationHandler}>
                            {pageNumber}
                        </span></b>
                    </li>
                )))}
                </ul>
    
            </div>
        )
    }
}
