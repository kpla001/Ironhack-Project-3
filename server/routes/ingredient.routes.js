const router = require("express").Router();
const Ingredient = require("../models/ingredient/Ingredient");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/",
    //  isLoggedIn,
    (req, res) => {
        res.send("These are my ingredients")
    })

module.exports = router;