import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './userTable.css'

class UserTable extends React.Component {
  render() {
    const { cookbooks, handleDelete } = this.props
    return (
      <div>
        {cookbooks.map((cookbook, index) => (
          <div
            key={cookbook._id}
            className="cookBookCard"
            style={{ width: '18rem', height: '18rem', marginBottom: '1rem' }}
          >
            
            <div className="cookBookCardBody">
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'green',
                  fontSize: '20px',
                }}
                to={`cookbook/${cookbook._id}`}
              >
                <h3 className="cookBookCardTitle">{cookbook.title}</h3>
              </Link>
              <br></br>
              <p className="cookBookCardText">{cookbook.description}</p>
              <br></br>
              <br></br>
              <br></br>

              <button onClick={() => handleDelete(cookbook)} className="btn btn-danger btn-sm deleteButton">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default UserTable
