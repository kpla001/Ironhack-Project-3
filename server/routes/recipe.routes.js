const router = require("express").Router();
const Recipe = require("../models/recipe/Recipe");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get(
  "/",
  //  isLoggedIn,
  (req, res) => {
    Recipe.find()
      .populate("ingredients")
      .populate("author")
      .then((recipeFromDb) => res.status(200).json({ recipes: recipeFromDb }))
      .catch((err) => res.json({ errorMessage: err }));
  }
);

router.post("/", (req, res) => {
  Recipe.create(req.body).then((recipeToDb) => {
    res.status(200).json({ recipe: recipeToDb });
  });
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .populate("ingredients")
    .populate("author")
    .then((recipeFromDb) => {
      res.status(200).json({ recipe: recipeFromDb });
    })
    .catch((err) => {
      res.json({ errorMessage: err });
    });
});

module.exports = router;
