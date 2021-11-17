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
          {cookbooks.map((cookbooks) => (
            <tr key={cookbooks._id}>
              <td>{cookbooks.title}</td>
              <td>{cookbooks.recipe}</td>
              <td>{cookbooks.numberInStock}</td>
              <td>{cookbooks.dailyRentalRate}</td>
              <td>
                <Like
                  liked={cookbooks.liked}
                  onClick={() => onLike(cookbooks)}
                />
              </td>
              <td>
                <button
                  onClick={() => onDelete(cookbooks)}
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
