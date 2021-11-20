import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserTable extends React.Component {
  render() {
    const { cookbooks, handleDelete } = this.props;
    return (
      <div>
        {cookbooks.map((cookbook, index) => (
          <div
            key={cookbook._id}
            className="card"
            style={{ width: "18rem", height: "18rem", marginBottom: "4rem" }}
          >
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">{cookbook.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link
                style={{
                  textDecoration: "none",
                  color: "green",
                  fontSize: "20px",
                }}
                to={`recipe-details/${cookbook.id}`}
              >
                {`${cookbook.title}`}
              </Link>
              <br></br>
              <br></br>
              <br></br>

              <button
                onClick={() => handleDelete(cookbook)}
                className="btn btn-danger btn-sm "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default UserTable;
