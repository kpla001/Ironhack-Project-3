import React from "react";
import { Link } from "react-router-dom";
import './SearchResults.css';

// {result.analyzedInstructions[0].steps.map(( step => (
//     <div key={step.number} className="recipeSteps"> 
//       <p>{step.number}. {step.step}</p>
//     </div>
// )))}

export default function RecipeResults({ results }) {
  return (
    <div className="recipeResults" >
      {results.map(( result => (
        <div key={result.id} className="resultCard">
          <Link to={`recipe-details/${result.id}`}>
            {result.title}
          </Link>
            <div className="recipeDetails">
              <img src={`${result.image}`} alt='icon' className="recipeImage"/>
            </div>
              <div className="recipeDescription">
                <b>Total Steps:{' '}</b>
                {result.analyzedInstructions[0].steps.length}
              </div>
        </div>
      )))}
    </div>
  )
}
  
