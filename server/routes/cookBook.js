const router = require("express").Router();
// const CookBook = require("../models/CookBook.model");
// const Recipe = require("../models/Recipe.model");

router.get("/my-cookbooks", (req, res) => {
  res.send("This is my cookBook!");
});

module.exports = router;
