const router = require("express").Router();
const cookBook = require("../models/cookBook.model");
// const Recipe = require("../models/Recipe.model");

router.get("/", (req, res) => {
  res.send("This Works!");
});

module.exports = router;
