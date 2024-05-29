const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); 
require('dotnev').config();

const translateRouter = require('./routes/translate');

const app = express();

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json()); // middleware to parse JSON request
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/translate', translateRouter);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = app;
