const express = require("express");
const router = express.Router();
const db = require("../model/helper");
//const itemMustExist = require('../guards/itemMustExist')

router.get("/", (req, res) => {
  res.send("Welcome to the API for your calculator ;)");
  //It is executed!
  console.log("I will not be executed!");
});

//  equals '/formdata/users don't need to add /formdata (ref api.js fsdb app)
router.get("/users", async (req, res) => {
  console.log(req.body);
  try {
    // GET data from users table and assign to result
    const result = await db("SELECT * FROM users ORDER BY id ASC");
    res.send(result.data);
  } catch (e) {
    console.log("In the catch");
    console.log(e.message);
    res.status(500).send({ error: e.message });
  }
});

// SEPERATE POST REQUEST FOR INCOME "/incomes_dates/:userId" - see addIncome() function  in app.jsx

router.post("/users", async (req, res) => {
  // The request's body is available in req.body
  //const { item } = req.body; destructure properties that have the values of the form data
  const sqlQuery = `INSERT INTO users (firstName, lastName, startWindow, endWindow) 
                     VALUES ('${firstName}','${lastName}','${startWindow}','${endWindow}')`;
  try {
    await db(sqlQuery);
    // If the query is successfull you should send back the full list of items
    const updatedUsers = await db("SELECT * FROM users");
    res.status(201).send(updatedUsers.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// router.delete(/users/:user_id)

module.exports = router;
