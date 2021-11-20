const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const CookBook = require("../models/cookbook/CookBook");
const Recipe = require("../models/recipe/Recipe");
const Ingredient = require("../models/ingredient/Ingredient");
const User = require("../models/user/User.model");
const mongoose = require('mongoose');

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

// TODO: Change Routes to /user rather than userId 
router.get("/:userId", (req, res) => {
    const preparedUserId = mongoose.Types.ObjectId(req.params.userId);
    User.findById(preparedUserId)
    // User.findById(req.params.userId)
    .populate('cookbooks')
    .then(userData => {
        // console.log("userData----------", userData)
        res.status(200).json({ user: userData });
    })
    .catch((err) => {
        // console.log(err);
        res.status(500).json({ errorMessage: `error retrieving user: ${req.params.userId}, ${err}` });
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
        res.status(500).json({ errorMessage: `error retrieving cookbooks by userId: ${req.params.userId}, ${err}` });
    })
})

router.post("/:userId/:cookbookId", (req, res) => {
    const recipeId = req.body._id;
    

    User.findById(req.params.userId)
    .populate('cookbooks')
    .then(userData => {
        const cookbookToUpdate = userData.cookbooks.filter((cookbook) => String(cookbook._id) === String(req.params.cookbookId))
        
        // console.log(...cookbookToUpdate._id)
        
        const preparedCookBookId = mongoose.Types.ObjectId(cookbookToUpdate[0]._id);

        // console.log(preparedCookBookId);

        CookBook.findById(preparedCookBookId)
        .populate({ path: "recipes", model: "CookBook"})
        .then(populatedCookBook => {
            CookBook.findByIdAndUpdate(preparedCookBookId, { $push: { recipes: recipeId }}, {new: true})
            .then(updatedCookBook => {
                res.status(200).json({ updatedCookBook })
            })
            .catch((err) => res.status(500).json({ errorMessage: err }))
        })
        .catch((err) => res.status(500).json({ errorMessage: err }))

    })
    .catch((err) => res.status(500).json({ errorMessage: err }))
})


module.exports = router;