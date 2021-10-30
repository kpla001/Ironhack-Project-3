const { Schema, model } = require("mongoose");

const cookBookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  spoonifyId: {
    type: String,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

<<<<<<< HEAD
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "recipe",
    },
  ],
=======
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  }],
>>>>>>> 20726d3f7c5f0ee0dd67cdc97fa9615cacccef36

  image: String,

  description: String,

  timestamps: true,
});

const Cookbook = model("CookBook", cookBookSchema);
module.exports = Cookbook;
