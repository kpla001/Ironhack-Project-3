const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  name: { type: String },
  spoonifyId: { type: String },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  image: { type: String },
  calories: { type: Number },
  description: { type: String },
  directions: [String],
});

module.exports = model("Recipe", recipeSchema);
