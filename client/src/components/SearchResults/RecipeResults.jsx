import React from "react";
import { Link } from "react-router-dom";
import './SearchResults.css';
import Pagination from "../Pagination/Pagination";

// {result.analyzedInstructions[0].steps.map(( step => (
//     <div key={step.number} className="recipeSteps"> 
//       <p>{step.number}. {step.step}</p>
//     </div>
// )))}

export default function RecipeResults({ results, currentPage, pageSize, paginationHandler }) {
  return (
    <div className="recipeResults" >
      {results.map(( result => (
        <div key={result.id} className="resultCard">
          <Link to={`recipe-details/${result.id}`} className="recipeTitle" style={{fontSize: 20}}>
            <b>{result.title}</b>
          </Link>
            <div>
              <img src={`${result.image}`} alt='icon' className="recipeImage"/>
            </div>
              <div className="recipeDescription">
                <b>Total Steps:<span> </span></b>
                {result.analyzedInstructions[0]?.steps.length}
              </div>
              <div className="recipeDescription">
                <b>Ready in:<span> </span></b>
                {`${result.readyInMinutes} minutes`}
              </div>
              <div className="recipeDescription">
                <b>Servings:<span> </span></b>
                {result.servings}
              </div>
              <div className="recipeDescription">
                <b>Appropriate for:</b>
                <ul>
                {result.dishTypes.map(( (dishType, i) => (
                  <li key={i}>
                    {dishType}
                  </li>
                )))}
                </ul>
              </div>
        </div>
      )))}
      <Pagination
      id="pagination"
      dataArray={results}
      currentPage={currentPage}
      pageSize={pageSize}
      paginationHandler={paginationHandler}
      />
    </div>
  )
}
  
