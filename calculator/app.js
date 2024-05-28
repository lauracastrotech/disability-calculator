const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); 
// I want to access translation of text on my website, what would i name the router?
const translateRouter = require('./routes/translate');

const app = express();

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// would the base url be my free? I think that my routes file will only have one POST route, is that okay?
// is the code that needs to go in the routes file - like the code snippet in rapid API
app.use('/', translateRouter);

module.exports = app;
