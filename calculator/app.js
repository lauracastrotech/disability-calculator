const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); 
require('dotnev').config();
dotenv.config(); //do i need to add this code to components to access environment  vars

const translateRouter = require('./routes/translate');
const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/tranlate', translateRouter); //---do i just need to put '/'

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.listen(PORT, () => { // this should have 5173 port listening
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
