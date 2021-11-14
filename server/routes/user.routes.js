const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const CookBook = require("../models/cookbook/CookBook");
const Recipe = require("../models/recipe/Recipe");
const Ingredient = require("../models/ingredient/Ingredient");
const User = require("../models/user/User.model");

router.get("/", (req, res) => {
    User.find()
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

router.get("/:id", (req, res) => {
    User.findById(req.params.id)
    .populate('cookbooks')
    .then(userData => {
        // console.log(userData)
        res.status(200).json({ user: userData });
    })
    .catch((err) => {
        // console.log(err);
        res.status(500).json({ errorMessage: err });
    });
})

router.get("/:userId/:cookbookId", (req, res) => {
    User.findById(req.params.userId)
    .populate('cookbooks')
    .then(userData => {
    // console.log("🚀 ~ file: user.routes.js ~ line 39 ~ router.get ~ userData ", userData.cookbooks )
        res.status(200).json({ cookbooks: userData.cookbooks });
    })
    .catch((err) => {
        res.status(500).json({ errorMessage: err });
    })
})


module.exports = router;