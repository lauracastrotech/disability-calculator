/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from 'react'
import translateText from '../../GoogleTranslate';
import Header from './components/Header';
import TwpCalculator from './pages/TwpCalculator';
import Footer from './components/Footer';

// Create context for the date that the TWP ends
const EndDateContext = createContext(null);

function App() {
  

  return (
    <>
      <Header />
      <TwpCalculator />
      <Footer />
    </>
  )
}

// function App() {
//   const [inputText, setInputText] = useState('');
//   const [targetLanguage, setTargetLanguage] = useState('es'); // Default: Spanish

//   const handleTranslate = async () => {
//     if (inputText) {
//       const translatedText = await translateText(inputText, targetLanguage);
//       // Do something with the translatedText, e.g., display it on the page.
//       console.log(translateText);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       />
//       <select
//         value={targetLanguage}
//         onChange={(e) => setTargetLanguage(e.target.value)}
//       >
//         <option value="es">Spanish</option>
//         <option value="fr">French</option>
//         {/* Add more language options */}
//       </select>
//       <button onClick={handleTranslate}>Translate</button>
//     </div>
//   );
// }

export default App;
