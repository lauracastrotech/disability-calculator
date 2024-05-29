const express = require('express');
const axios = require('axios');
const router = express.Router();

// to use express server and store data in the databse you write queries here

// POST request to translate text
router.post('/', async(req, res) => {
  const { text, targetLang } = req.body;
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.post('https://api-free.deepl.com/v2/translate', null, {
      params: {
        auth_key: apiKey,
        text: text,
        target_lang: targetLang
      }
    });

    const translatedText = response.data.translations[0].text;
    res.json({ translatedText });
  }

  catch(error) {
    res.status(500).send({error: 'There was a problem translating your text.'})
  }
});

// you need a seperate route that will insert form data to database

module.exports = router;
