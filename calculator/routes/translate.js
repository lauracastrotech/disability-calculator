var express = require('express');
var router = express.Router();

// to use express server and store data in the databse you write queries here


/* GET home page. */
router.get('/', function (req, res, next) {
  // db("SELECT * FROM users")
  res.send({ title: 'Express' });
});
// you need route to API for that returns that translated text that you want to render on a page

// you need a seperate route that will insert form data to database

module.exports = router;
