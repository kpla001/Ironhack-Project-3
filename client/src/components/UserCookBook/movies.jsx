import React, { Component } from "react";
import Like from "../common/like";
import _ from "lodash";
import Pagination from "../common/pagination";
import { getCookbooks } from "../../services/fakeCookbookService.js";
import { paginate } from "../../utils/paginate";
// import MoviesTable from "./moviesTable";
// import ListGroup from "../common/listGroup";

class UserCookbooks extends React.Component {
  state = {
    cookbooks: getCookbooks(),
    currentPage: 1,
    pageSize: 4,
  };

  handleDelete = (book) => {
    const cookbooks = this.state.cookbooks.filter((b) => b._id !== book._id);
    this.setState({ cookbooks: cookbooks });
  };

  handleLike = (book) => {
    console.log("Like CLicked", book);
    const cookbooks = [...this.state.cookbooks];
    const index = cookbooks.indexOf(book);
    cookbooks[index] = { ...cookbooks[index] };
    cookbooks[index].liked = !cookbooks[index].liked;
    this.setState({ cookbooks });
  };

  handlePageChange = (page) => {
    // console.log(page);
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.cookbooks;
    const { pageSize, currentPage, cookbooks: allCookbooks } = this.state; // add allCookbooks

    if (count === 0) return <p>Add some good stuff!</p>;

    const cookbooks = paginate(allCookbooks, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>Showing {count} books in the database.</p>

        <table className="table">
          <thead>
            <tr>
              <th>Cookbooks</th>
              <th>Recipes</th>
              <th>Ingredients</th>
              <th>Favorites</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {cookbooks.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.recipe.name}</td>
                <td>{book.numberInStock}</td>
                <td>{book.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={book.liked}
                    onClick={() => this.handleLike(book)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(book)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default UserCookbooks;
