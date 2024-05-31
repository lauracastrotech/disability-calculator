const express = require('express');
const router = express.Router();
const db = require("../model/helper");
//const itemMustExist = require('../guards/itemMustExist')

router.get("/", (req, res) => {
    res.send("Welcome to the API");
    //It is executed!
    console.log("I will not be executed!");
});

// don't need to add /formdata --- NEED TO EDIT THE CODE IN THESE REQUEST keep the queries simple like getting income firstname and lastnam, delete a record, post insert a record
//router.get('/firstName', async (req, res) => {
    // try {
    //     const result = await translator.translateText('Hello, world!', null, 'fr');
    //     res.json({ text: result.text });
    // } catch (error) {
    //     res.status(500).json({ error: ' error' });
    // }
//});

module.exports = router;
