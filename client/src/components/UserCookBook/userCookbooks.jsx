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
    currentPage: 1,
    pageSize: 4,
    // sortColumn: { path: "title,", order: "asc" },
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.props.cookbooks;
    const { pageSize, currentPage } = this.state;

    const { cookbooks, handleDelete } = this.props;
    const paginatedCookbooks = paginate(cookbooks, currentPage, pageSize);

    if (count === 0) return <p>Add some good stuff!</p>;

    console.log(this.props);
    return (
      <div className="row">
        <UserTable cookbooks={paginatedCookbooks} handleDelete={handleDelete} />
        <Pagination
          itemsCount={cookbooks.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default UserCookbooks;
