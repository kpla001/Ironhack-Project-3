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
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  }],
=======
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "recipe",
    },
  ],
>>>>>>> 4f7022d3d0c2ce942a7fce76fff2dfabdf46f893

  image: String,

  description: String,

  timestamps: true,
});

const Cookbook = model("CookBook", cookBookSchema);
module.exports = Cookbook;
