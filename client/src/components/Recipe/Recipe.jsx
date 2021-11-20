import React from 'react'
import './Recipe.css'
import { Link } from 'react-router-dom'

export default function Recipe({ recipes }) {
  return (
    <div>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe._id}>
            <Link to={`recipe/${recipe._id}`}>{recipe.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
