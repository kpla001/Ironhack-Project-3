const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", (req, res) => {
  res.send("Here are my recipes!");
});
module.exports = router;
