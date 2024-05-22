var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // db("SELECT * FROM users")
  res.send({ title: 'Express' });
});

module.exports = router;
