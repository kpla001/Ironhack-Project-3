const router = require('express').Router();
const authRoutes = require('./auth');
const cookBookRoutes = require('./cookBook.routes');
const recipeRoutes = require('./recipe.routes');
const ingredientRoutes = require('./recipe.routes');

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.use('/auth', authRoutes);

router.use('/cookbooks', cookBookRoutes);

router.use('/recipes', recipeRoutes);

router.use('/ingredients', ingredientRoutes);

module.exports = router;
