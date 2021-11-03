const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  title: String,
  spoonifyId: String,
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  images: String,
  calories: Number,
  description: String,
  directions: [String],
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;

// Note from Kyle: "Take another look at your author and ingredient keys and compare it to how I wrote mine in the Ingredient model"
