import React, { Component } from "react";
import Like from "../common/like";

class UserTable extends React.Component {
  render() {
    const { cookbooks, onDelete, onLike } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
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
                <Like liked={book.liked} onClick={() => onLike(book)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(book)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserTable;
