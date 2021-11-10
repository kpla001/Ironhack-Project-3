import React, { Component } from "react";
import ListGroup from "../common/listGroup";
import Like from "../common/like";
import _ from "lodash";
import Pagination from "../common/pagination";
import { getCookbooks } from "../../services/fakeCookbookService.js";
import { getRecipes } from "../../services/fakeGenreService";
import { paginate } from "../../utils/paginate";

// import MoviesTable from "./moviesTable";
// import ListGroup from "../common/listGroup";

class UserCookbooks extends React.Component {
  state = {
    cookbooks: [],
    recipes: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    this.setState({ cookbooks: getCookbooks(), recipes: getRecipes() });
  }

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

  handleRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    const { length: count } = this.state.cookbooks;
    const {
      pageSize,
      currentPage,
      selectedRecipe,
      cookbooks: allCookbooks,
    } = this.state; // add allCookbooks

    if (count === 0) return <p>Add some good stuff!</p>;

    const filtered = selectedRecipe
      ? allCookbooks.filter((m) => m.recipe._id === selectedRecipe._id)
      : allCookbooks;

    const cookbooks = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.recipes}
            selectedItem={this.state.selectedRecipe}
            onItemSelect={this.handleRecipeSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} books in the database.</p>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Name</th>
                <th>Ingredients</th>
                <th>Favorite</th>
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
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default UserCookbooks;
