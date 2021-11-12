const { Schema, model } = require("mongoose");

const cookBookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],

  image: String,

  description: String,
});

const Cookbook = model("CookBook", cookBookSchema);

module.exports = Cookbook;
