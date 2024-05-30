const express = require('express');
const deepl = require('deepl-node');
const router = express.Router();
const db = require("../model/helper"); 
// const PORT = 5000;

//  Initialize DeepL Translator
const apiKey = process.env.API_KEY;
const translator = new deepl.Translator(apiKey);

router.get('/', async (req, res) => {
  try {
      const result = await translator.translateText('Hello, world!', null, 'fr');
      res.json({ text: result.text });
  } catch (error) {
      res.status(500).json({ error: 'Translation error' });
  }
});

// // Create a function that translates text using the api
// const translateText = async (text, targetLang) => {
//   try {
//     const result = await translator.translateText(text, null, targetLang);
//     return result.text;
//   }
//   catch(e) {
//     console.log('Unable to translate text.');
//   }
// }

// // GET
// app.get('/translate', async (req, res) => {
//   try {
//       const result = await translator.translateText('Hello, world!', null, 'fr');
//       res.json({ text: result.text });
//   } catch (error) {
//       res.status(500).send('Translation error');
//   }
// });


// // POST request to translate text
// router.post('/', async(req, res) => {
//   const { text, targetLang } = req.body;

//   try {
//     const translatedText = await translateText(text, targetLang);
//     res.json({translatedText});
//   }
//   catch(error) {
//     res.status(500).send({error: 'Something is wrong, your text failed to translate.'})
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// you need a seperate route that will insert form data to database

module.exports = router;

