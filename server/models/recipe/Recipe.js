const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  title: String,
  spoonifyId: String,
  required: true,
  ingredients: [Schema.Types.ObjectId],
  ref: "Ingredient",
  author: Schema.Types.ObjectId,
  ref: "User",
  images: String,
  calories: Number,
  description: String,
  directions: [String],
  timestamps: true,
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
