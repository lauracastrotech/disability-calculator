const express = require("express");
const router = express.Router();
const db = require("../model/helper");
//const itemMustExist = require('../guards/itemMustExist')

router.get("/", (req, res) => {
  res.send("Welcome to the API for your calculator");
  //It is executed!
  console.log("I will not be executed!");
});

// For mvp demo, use JSON viewer to see that routes work

// Don't need to add /formdata (ref api.js fsdb app)

// router.get(/users) -- show users table data

// router.post(/users) -- add user with form data

// router.put(/twp_dates/:id) -- this is simple backend, this is only used if user monthly income changes, if you have time add guard of item must exist

// router.delete(/users/:user_id)

module.exports = router;
