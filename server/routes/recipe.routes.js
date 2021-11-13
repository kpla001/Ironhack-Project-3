const router = require("express").Router();
const Recipe = require("../models/recipe/Recipe");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const Ingredient = require("../models/ingredient/Ingredient");


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
  //1) Check if I have ingredient in database
  //2) if ingredient exists in database, then take id of ingredient
  //3) if 2. is true, then save the recipe and push the ingredient id into ingredients array
  //2a) if ingredient does NOT exist in the DB, save the new ingredient in the ingredients collection, get the id of the newly created ingredient, and proceed to step 3a, which is:
  //3a) Create a new recipe and push the id of the newly created ingredient into ingredients array
  req.body.ingredients.forEach((ingredient, i) => {
    Ingredient.findOne({ name: ingredient.name }).then((ingredientFromDb) => {

      if (ingredientFromDb !== null) {

      }
      Ingredient.create(ingredient)
      .then(ingredientFromDb => {
        ingredientIdArr.push(ingredientFromDb._id)
        // next();
      })
      .catch(err => console.log(err));
    })
    
    if(i === req.body.ingredients.length - 1) {
          checkRecipe();
        }
  }
  //if condition goes here
  )
  function checkRecipe(){
      console.log(ingredientIdArr.length,"====", req.body.ingredients.length);
      Recipe.findOne({ spoonacularId: req.body.spoonacularId })
      .then((recipeFromDb) => {
        console.log("Recipe from DB:", recipeFromDb);
        // '!!' returns a truthy or falsy value based on contents of variable
        if (recipeFromDb !== null){
          res.json(recipeFromDb)
        } else {
          Recipe.create({ ...req.body, ingredients: ingredientIdArr})
            .then((recipeToDb) => {
              console.log("Recipe:",recipeToDb)
              res.status(200).json({ recipe: recipeToDb });
            })
            .catch(err => console.log(err));
            // .catch((err) => res.json({ errorMessage: err }));
        }
      }).catch(err => console.log(err));
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
