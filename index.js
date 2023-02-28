/**
 * =======================================================================
 * IMPORT THE REQUIRED NODEJS AND NPM MODULES
 * =======================================================================
 */
const path = require('path'); // The Path module for directory path management
const express = require('express'); // The ExpressJS HTTP server
const nunjucks = require('nunjucks'); // The Nunjucks HTML-rendering engine

/**
 * =======================================================================
 * SETUP THE EXPRESS MODULE AND THE APPLICATION PORT
 * =======================================================================
 */
const app = express();
const PORT = process.env.PORT || 49500;

/**
 * =======================================================================
 * SETUP NUNJUCKS AS THE DEFAULT HTML-RENDERING ENGINE
 * =======================================================================
 */
nunjucks.configure(path.join(__dirname, 'views'), {
    express: app,
    autoescape: true,
});
app.set('view engine', 'html'); // Compile all HTML files using Nunjucks

/**
 * =======================================================================
 * SETUP THE APPLICATION ROUTES USING EXPRESS
 * =======================================================================
 */

// Setup and manage the homepage route
app.get('/', (req, res) => {
    res.render('index');
});

/**
 * =======================================================================
 * START THE APPLICATION ON THE PRE-DESIGNATED PORT
 * =======================================================================
 */
app.listen(PORT, () => {
    console.log(`The application is now available at http://localhost:${PORT}`);
});
