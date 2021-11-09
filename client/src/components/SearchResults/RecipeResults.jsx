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
          <Link to={`recipe-details/${result.id}`} className="recipeTitle">
            {result.title}
          </Link>
            <div className="recipeDetails">
              <img src={`${result.image}`} alt='icon' className="recipeImage"/>
            </div>
              <div className="recipeDescriptionLeft">
                <b>Total Steps:<span> </span></b>
                {result.analyzedInstructions[0]?.steps.length}
              </div>
              <div className="recipeDescriptionLeft">
                <b>Ready in:<span> </span></b>
                {`${result.readyInMinutes} minutes`}
              </div>
              <div className="recipeDescriptionRight">
                <b>Appropriate for:</b>
                <ul>
                {result.dishTypes.map(( (dishType, i) => (
                  <li key={i}>
                    {dishType}
                  </li>
                )))}
                </ul>
              </div>
              <div className="recipeDescriptionRight">
                <b>Servings:<span> </span></b>
                {result.servings}
              </div>
        </div>
      )))}
    </div>
  )
}
  
