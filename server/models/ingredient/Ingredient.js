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


    timestamps: true,


})

module.exports = model("Ingredient", ingredientSchema);