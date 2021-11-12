const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  name: { type: String },
  spoonifyId: { type: String },
  ingredients: [
    {
    _id: { type: String },
    name: { type: String },
    image: { type: String },
    }
  ],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  image: { type: String },
  calories: { type: Number },
  description: { type: String },
  directions: [Object],
  cuisines: [String],
  dairyFree: { type: Boolean},
  dishTypes: [String],
  glutenFree: { type: Boolean },
  readyInMinutes: { type: Number },
  servings: { type: Number },
  vegan: { type: Boolean },
  vegetarian: { type: Boolean },

});

module.exports = model("Recipe", recipeSchema);
