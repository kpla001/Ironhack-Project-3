import React, { Component } from 'react'
import './Ingredients.css'
import { Link } from 'react-router-dom'

export default function Ingredients({ ingredients }) {
  // console.log(ingredients)
  return (
    <div className="ingredient-list">
      {ingredients.map(ingredient => (
        <div key={ingredient._id}>
          <Link to={`ingredient/${ingredient._id}`}>{ingredient.name}</Link>
        </div>
      ))}
    </div>
  )
}
