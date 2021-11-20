const router = require('express').Router()
const Recipe = require('../models/recipe/Recipe')
const isLoggedOut = require('../middleware/isLoggedOut')
const isLoggedIn = require('../middleware/isLoggedIn')
const Ingredient = require('../models/ingredient/Ingredient')
const mongoose = require('mongoose')

router.get('/', (req, res) => {
  Recipe.find()
    .populate('ingredients')
    .populate('author')
    .then(recipeFromDb => res.status(200).json({ recipes: recipeFromDb }))
    .catch(err => res.json({ errorMessage: `error retrieving recipes: ${req.params}, ${err}` }))
})

router.post('/', (req, res, next) => {
  let ingredientIdArr = []

  req.body.ingredients.forEach((ingredient, i) => {
    Ingredient.findOne({ name: ingredient.name })
      .then(ingredientFromDb => {
        // console.log("1st part===============",ingredientFromDb);
        if (ingredientFromDb !== null) {
          ingredientIdArr.push(ingredientFromDb._id)

          if (ingredientIdArr.length === req.body.ingredients.length) {
            checkRecipe()
          }
        } else {
          Ingredient.create(ingredient)
            .then(ingredientFromDb => {
              // console.log("2nd part -----------------------", ingredientFromDb._id)
              ingredientIdArr.push(ingredientFromDb._id)

              if (ingredientIdArr.length === req.body.ingredients.length) {
                checkRecipe()
              }
            })
            .catch(err => console.err(`error while creating ingredients: ${req.params}, ${err}`))
        }
      })
      .catch(err => console.err(`error while creating recipe: ${req.params}, ${err}`))
  })
  function checkRecipe() {
    const spoonacularId = req.body.spoonacularId

    Recipe.findOne({ spoonacularId })
      .then(recipeFromDb => {
        if (recipeFromDb !== null) {
          res.json(recipeFromDb)
        } else {
          const preparedRecipeId = mongoose.Types.ObjectId(spoonacularId)
          Recipe.create({ ...req.body, ingredients: ingredientIdArr })
            .then(recipeToDb => {
              Recipe.findById(preparedRecipeId)
                .populate({ path: 'ingredients', model: 'Ingredient' })
                .then(populatedObject => {
                  res.status(200).json({ recipe: populatedObject })
                })
                .catch(err =>
                  res.json({
                    errorMessage: `error retrieving recipe: ${preparedRecipeId}, ${err}`,
                  }),
                )
            })
            .catch(err => res.json({ errorMessage: `error creating recipe: ${req.body}, ${err}` }))
        }
      })
      .catch(err => res.json({ errorMessage: `error creating recipe: ${spoonacularId}, ${err}` }))
  }
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Recipe.findById(id)
    .populate('ingredients')
    .populate('author')
    .then(recipeFromDb => {
      res.status(200).json({ recipe: recipeFromDb })
    })
    .catch(err => {
      res.json({ errorMessage: `error retrieving recipe: ${id}, ${err}` })
    })
})

router.post('/:id', (req, res) => {
  const id = req.params.id
  Recipe.findByIdAndUpdate(id, req.body, { new: true })
    .then(recipeToUpdate => {
      res.status(200).json({ recipe: recipeToUpdate })
    })
    .catch(err => res.json({ errorMessage: `error updating recipe with id: ${id}, ${err}` }))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Recipe.findByIdAndDelete(id)
    .then(recipeToDelete => {
      res.status(200).json({ success: true })
    })
    .catch(err => res.json({ errorMessage: `error deleting recipe with id: ${id}, ${err}` }))
})

module.exports = router
