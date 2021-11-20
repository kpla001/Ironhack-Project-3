import React, { Component } from 'react'
import './Cookbooks.css'
import { Link } from 'react-router-dom'

export default function Cookbooks({ cookbooks }) {
  // console.log(cookbooks)
  return (
    <div className="cookbook-list">
      {cookbooks.map(cookbook => (
        <div key={cookbook._id}>
          <Link to={`cookbook/${cookbook._id}`}>{cookbook.name}</Link>
        </div>
      ))}
    </div>
  )
}
