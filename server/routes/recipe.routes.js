const router = require("express").Router();
const Recipe = require("../models/recipe/Recipe");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const Ingredient = require("../models/ingredient/Ingredient");
const mongoose = require('mongoose');


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

router.post("/", (req, res, next) => {
  // console.log("Recipe----------: ", req.body)
  let ingredientIdArr = [];
 
  req.body.ingredients.forEach((ingredient, i) => {
    Ingredient.findOne({ name: ingredient.name })
    .then((ingredientFromDb) => {
      // console.log("1st part===============",ingredientFromDb);
      if (ingredientFromDb !== null) {
        ingredientIdArr.push(ingredientFromDb._id)

        if(ingredientIdArr.length === req.body.ingredients.length) {
          checkRecipe()
        }
      } else {
        Ingredient.create(ingredient)
        .then(ingredientFromDb => {
          // console.log("2nd part -----------------------", ingredientFromDb._id)
          ingredientIdArr.push(ingredientFromDb._id);

          if(ingredientIdArr.length === req.body.ingredients.length) {
            checkRecipe()
          }
          
        })
        .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));

    // if(i === ingredientIdArr.length - 1) {
    //   console.log("i: ", i, "<------> req.body.ingredients.length - 1: ", req.body.ingredients.length - 1, "ingredientIdArr.length", ingredientIdArr.length)
    //       checkRecipe();
    // }
  })
  function checkRecipe() {
    // console.log("check recipe called!!!!!")
      // console.log(ingredientIdArr.length,"====", req.body.ingredients.length);
      Recipe.findOne({ spoonacularId: req.body.spoonacularId })
      .then((recipeFromDb) => {
        // console.log("Recipe from DB:", recipeFromDb);
        // '!!' returns a truthy or falsy value based on contents of variable
        if (recipeFromDb !== null){
          res.json(recipeFromDb)
        } else {
          const preparedRecipeId = mongoose.Types.ObjectId(req.body.spoonacularId)
          // console.log("ingredientIdArr: ", ingredientIdArr)
          Recipe.create({ ...req.body, ingredients: ingredientIdArr})
            .then((recipeToDb) => {
              // console.log("Recipe:",recipeToDb)
              Recipe.findById(preparedRecipeId).populate({ path: "ingredients", model: "Ingredient" })
              .then(populatedObject => {
                res.status(200).json({ recipe: populatedObject });
              })
              .catch((err) => res.json({ errorMessage: err }));
            })
            .catch((err) => res.json({ errorMessage: err }));
        }
    }) .catch((err) => res.json({ errorMessage: err }));
  }
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

router.post("/:id", (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((recipeToUpdate) => {
      res.status(200).json({ recipe: recipeToUpdate });
    })
    .catch((err) => res.json({ errorMessage: err }));
});

router.delete("/:id", (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((recipeToDelete) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => res.json({ errorMessage: err }));
});

module.exports = router;
