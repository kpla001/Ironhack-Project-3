import React, { Component } from "react";
import UserTable from "./userTable";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
// import { getCookbooks } from "../../services/fakeCookbookService.js";
// import { getRecipes } from "../../services/fakeRecipeService";
import service from "../../services/service";
import { paginate } from "../../utils/paginate";
import _ from "lodash";

class UserCookbooks extends React.Component {
  state = {
    ingredients: [],
    cookbooks: [],
    recipes: [],

    currentPage: 1,
    pageSize: 4,
    // sortColumn: { path: "title,", order: "asc" },
  };

  componentDidMount() {
    service.getUserCookBooksById(this.props.user._id).then((data) => {
      // console.log("This is our data ------------------------", data);
      // console.log("Props: ====================", this.props);
      this.setState({ cookbooks: data.user.cookbooks });
    });
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
    this.setState({ currentPage: page });
  };

  handleRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe, currentPage: 1 });
  };

  handleSort = (path) => {
    console.log(path);
    this.setState({ sortColum: { path, order: "asc" } });
  };

  render() {
    console.log(this.state.cookbooks);

    const { length: count } = this.state.cookbooks;
    const {
      pageSize,
      currentPage,

      selectedRecipe,
      cookbooks: allCookbooks,
    } = this.state;

    if (count === 0) return <p>Add some good stuff!</p>;

    const filtered =
      selectedRecipe && selectedRecipe._id
        ? allCookbooks.filter((m) => m.recipe._id === selectedRecipe._id)
        : allCookbooks;

    // const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const cookbooks = paginate(filtered, currentPage, pageSize);
    console.log(this.props);
    return (
      <div className="row">
        {this.state.cookbooks[0]?.title}
        <div className="col-3">
          <ListGroup
            items={this.state.recipes}
            selectedItem={this.state.selectedRecipe}
            onItemSelect={this.handleRecipeSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} items saved by user.</p>

          <UserTable
            cookbooks={cookbooks}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
        </div>

        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default UserCookbooks;
