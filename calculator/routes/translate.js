const express = require('express');
const deepl = require('deepl-node');
const router = express.Router();

//  Initialize DeepL Translator
const apiKey = process.env.API_KEY;
const translator = new deepl.Translator(apiKey);

// Create a function that translates text using the api
const translateText = async (text, targetLang) => {
  try {
    const result = await translator.translateText(text, null, targetLang);
    return result.text;
  }
  catch(e) {
    console.log('Unable to translate text.');
  }
}

// POST request to translate text
router.post('/', async(req, res) => {
  const { text, targetLang } = req.body;

  try {
    const translatedText = await translateText(text, targetLang);
    res.json({translatedText});
  }
  catch(error) {
    res.status(500).send({error: 'Something is wrong, your text failed to translate.'})
  }
});

// you need a seperate route that will insert form data to database

module.exports = router;
