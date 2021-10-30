const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
// const CookBook = require("../models/CookBook.model");
// const Recipe = require("../models/Recipe.model");

router.get(
  "/",
  // isLoggedin,
  (req, res) => {
    res.send("This is my cookBook!");
  }
);

module.exports = router;
