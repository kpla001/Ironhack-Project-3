const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const Recipe = require("../models/recipe/Recipe");

router.get("/", (req, res) => {
  res.send("Here are my recipes!");
});
module.exports = router;
