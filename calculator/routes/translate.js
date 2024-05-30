const express = require('express');
const deepl = require('deepl-node');
const router = express.Router();

//  Initialize DeepL Translator
const authKey = process.env.AUTH_KEY; // Ensure this is set in your .env file
const translator = new deepl.Translator(authKey);

router.get('/translate', async (req, res) => {
    try {
        const result = await translator.translateText('Hello, world!', null, 'fr');
        res.json({ text: result.text });
    } catch (error) {
        res.status(500).json({ error: 'Translation error' });
    }
});

// POST request to translate text
// router.post('/translate', async(req, res) => {
//   const { text, targetLang } = req.body;

//   try {
//     const translatedText = await translateText(text, targetLang);
//     res.json({translatedText});
//   }
//   catch(error) {
//     res.status(500).send({error: 'Something is wrong, your text failed to translate.'})
//   }
// });

// you need a seperate route that will insert form data to database

module.exports = router;
