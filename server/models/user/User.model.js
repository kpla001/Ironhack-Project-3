const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: String,
    cookbooks: [{ type: Schema.Types.ObjectId, ref: "CookBook" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);


userSchema.plugin(require("mongoose-autopopulate"));
const User = model("User", userSchema);

module.exports = User;
