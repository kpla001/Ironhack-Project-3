// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app);

// NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require('./routes');
app.use('/api', allRoutes);
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/cookbooks', require('./routes/cookBook.routes.js'));
app.use('/api/ingredients', require('./routes/ingredient.routes.js'));
app.use('/api/recipes', require('./routes/recipe.routes.js'));
app.use('/api/users', require('./routes/user.routes.js'));

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
