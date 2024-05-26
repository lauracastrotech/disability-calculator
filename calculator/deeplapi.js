import * as deepl from 'deepl-node';

const MY_KEY = process.env.API_KEY;
const authKey = "f63c02c5-f056-..."; // Replace with your key
const translator = new deepl.Translator(authKey);
const text = null;
const lang = null;

(async () => {
    const result = await translator.translateText(text, null, lang);
    console.log(result.text); 
})();
export default translateText;






// import axios from 'axios'; Google translate

// const API_KEY = 'AIzaSyDD3s4lRF8D4UXL_Rp_dgQEA_sc2Al9MmE'
// const API_URL = 'https://translation.googleapis.com/language/translate/v2'

// const translateText = async (text, targetLanguage) => {
//   const response = await axios.post(
//     `${API_URL}?key=${API_KEY}`,
//     {
//       q: text,
//       target: targetLanguage,
//     }
//   );

//   return response.data.data.translations[0].translatedText;
// };

// export default translateText;