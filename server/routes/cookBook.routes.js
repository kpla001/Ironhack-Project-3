const router = require("express").Router();
const CookBook = require("../models/cookbook/CookBook");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
// const Recipe = require("../models/Recipe.model");

router.get(
  "/",
  // isLoggedin,
  (req, res) => {
    CookBook.find()
      .populate("author")
      .populate("recipe")
      .then((CookbooksFromDB) => {});
  }
);

module.exports = router;
