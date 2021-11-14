const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const CookBook = require("../models/cookbook/CookBook");
const Recipe = require("../models/recipe/Recipe");
const Ingredient = require("../models/ingredient/Ingredient");
const User = require("../models/user/User.model");

router.get("/:id", (req, res) => {
    User.findById(req.params.id)
    .populate('cookbooks')
    .then(userData => {
        // console.log(userData)
        res.status(200).json({ user: userData });
    })
    .catch((err) => {
        // console.log(err);
        res.json({ errorMessage: err });
    });
})


module.exports = router;