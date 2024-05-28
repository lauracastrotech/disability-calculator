import * as deepl from 'deepl-node';

//const authKey = "f63c02c5-f056-..."; // Replace with your key
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;
const translator = new deepl.Translator(API_KEY);
const text = null;
const lang = null;

(async () => {
    const result = await translator.translateText(text, null, lang);
    console.log(result.text); 
})();
export default translateText;

