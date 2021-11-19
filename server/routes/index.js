const router = require('express').Router();
const authRoutes = require('./auth');
const cookBookRoutes = require('./cookBook.routes');
const recipeRoutes = require('./recipe.routes');
const ingredientRoutes = require('./recipe.routes');

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.use('/api/auth', authRoutes);

router.use('api/cookbooks', cookBookRoutes);

router.use('/api/recipes', recipeRoutes);

router.use('/api/ingredients', ingredientRoutes);

module.exports = router;
