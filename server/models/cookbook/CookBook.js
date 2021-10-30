const { Schema, model } = require("mongoose");

const cookBookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  id: {
    type: String,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
  },

  image: String,

  description: String,

  timestamps: true,
});

module.exports = Cookbook;
