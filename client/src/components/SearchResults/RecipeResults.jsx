import React, { Component }from "react";
import { Link } from "react-router-dom";
  
export default function RecipeResults({ results }) {
  return (
    <div className="recipeResults">
      {results.map(( result => (
        <div key={result.id}>
          <Link to={`recipe-details/${result.id}`}>
            {result.title}
          </Link>
        </div>
      )))}
    </div>
  )
}
  
