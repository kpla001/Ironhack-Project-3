import React from 'react'
import './RecipeDetails.css'

export default function RecipeDetails({ recipe }) {
  // console.log("recipe",recipe)
  return (
    <div className="recipeDetails">
      <h1 className="recipeHeader">{<b>{recipe?.title}</b>}</h1>
      <img src={recipe?.image} alt="icon" className="recipeDetailsImage" />
      <br />
      <div className="recipeDetailsCard">
        <div className="recipeDetailsIngredients">
          <h3 style={{ textAlign: 'left' }}>Ingredients:</h3>
          <ul>
            {recipe?.extendedIngredients.map((ingredient, i) => (
              <div key={i} className="recipeDetailsIngredients">
                <li key={ingredient.id} style={{ textAlign: 'left' }}>
                  {ingredient.original}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="recipeDetailsInstructions">
          <h3 style={{ textAlign: 'left' }}>Recipe Instructions:</h3>
          {recipe?.analyzedInstructions[0].steps.map(step => (
            <div key={step.number} className="recipeDetailsSteps">
              <p style={{ textAlign: 'left' }}>
                <b>{step.number}.</b> {step.step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
