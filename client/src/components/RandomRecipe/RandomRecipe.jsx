import React from "react";

export default function RandomRecipe({ results }) {
  return (
    <div className="randomResult">
      {results.map((result) => {
        <div key={result}>{result.title}</div>;
      })}
    </div>
  );
}
