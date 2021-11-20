const router = require('express').Router()
const Ingredient = require('../models/ingredient/Ingredient')
const isLoggedOut = require('../middleware/isLoggedOut')
const isLoggedIn = require('../middleware/isLoggedIn')

router.get(
  '/',
  //  isLoggedIn,
  (req, res) => {
    Ingredient.find()
      // .populate("author").populate("recipes")
      .then(ingredientsFromDb => {
        console.log(ingredientsFromDb)
        res.status(200).json({ ingredients: ingredientsFromDb })
      })
      .catch(err => {
        console.log(err)
        res.json({ errorMessage: err })
      })
  },
)

router.post(
  '/',
  // isLoggedIn,
  (req, res) => {
    console.log(req.body)
    Ingredient.create(req.body)
      .then(ingredientToDb => res.status(200).json({ ingredient: ingredientToDb }))
      .catch(err => res.json({ errorMessage: err }))
  },
)

router.get(
  '/:id',
  // isLoggedIn,
  (req, res) => {
    Ingredient.findById(req.params.id)
      // .populate("author").populate("recipes")`
      .then(ingredientFromDb => res.status(200).json({ ingredient: ingredientFromDb }))
      .catch(err => res.json({ errorMessage: err }))
  },
)

router.post(
  '/:id',
  // isLoggedOut,
  (req, res) => {
    Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(ingredientToUpdate => res.status(200).json({ ingredient: ingredientToUpdate }))
      .catch(err => res.json({ errorMessage: err }))
  },
)

router.delete(
  '/:id',
  // isLoggedOut,
  (req, res) => {
    Ingredient.findByIdAndDelete(req.params.id)
      .then(() => res.status(200).json({ success: true }))
      .catch(err => res.json({ errorMessage: err }))
  },
)

module.exports = router
