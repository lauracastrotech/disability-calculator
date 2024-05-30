const express = require('express');
const router = express.Router();

// don't need to add /formdata --- NEED TO EDIT THE CODE IN THESE REQUEST
router.get('/firstName', async (req, res) => {
    // try {
    //     const result = await translator.translateText('Hello, world!', null, 'fr');
    //     res.json({ text: result.text });
    // } catch (error) {
    //     res.status(500).json({ error: ' error' });
    // }
});

module.exports = router;
