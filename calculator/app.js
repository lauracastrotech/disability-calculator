const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); 
require('dotnev').config();
const PORT = 5000;

dotenv.config(); //do i need to add this code to components to access environment  vars

const translateRouter = require('./routes/formdata'); //change this file to formdata.js
// const formdataRouter = ''      ''
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/formdata', translateRouter); //in routes need to add this before col name ex. '/formadata/firstName'

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
