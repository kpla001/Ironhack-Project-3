const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
    name: {
        type: String,
        // required: true,
    },

    spoonifyId: String,

    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    image: String,


})

module.exports = model("Ingredient", ingredientSchema);