
// MISSING const createError = require("http-errors");

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors'); 

// THIS IS NOT IN FULL STACK APP RANA
// const PORT = 5000;
// require('dotnev').config(); -- i think that you can delete
// dotenv.config(); -- i think that you can delete

const formDateRouter = require('./routes/formdata'); 

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function(req, res, next) {
    res.send("Access the API at path /api");
  });
  app.use(function myMiddleWare(req, res, next) {
  console.log("We are in the backend!");
  next();
})


app.use('/formdata', formDataRouter); //in routes need to add this before col name ex. '/formadata/firstName'

// MISSING ERROR HANDLING CODE FROM DATABASE APP

// THIS IS NOT IN FULL STACK APP RANA
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

module.exports = app;
