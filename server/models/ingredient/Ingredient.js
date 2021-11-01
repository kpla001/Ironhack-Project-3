const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
    name: String,

    spoonifyId: String,

    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }],

    image: String,


})

module.exports = model("Ingredient", ingredientSchema);