const { Schema, model } = require('mongoose')

const ingredientSchema = new Schema({
  spoonacularId: Number,

  name: {
    type: String,
    // required: true,
  },

  // author: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User"
  // },

  image: String,
})

module.exports = model('Ingredient', ingredientSchema)
