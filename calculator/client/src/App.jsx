/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext, createContext } from 'react'
import {getTwpDate} from './utilities/twpDateUtils';
import Header from './components/Header';
import Languages from "./components/Languages"
import TwpForm from './components/TwpForm';
import TwpDate from "./components/TwpDate"
import Footer from './components/Footer';
import {TwpDateProvider} from './context/TwpDateContext'


function App() {

  useEffect(() => {
    getTwpDate('this is may');
  }, []);

  const [language, setLanguage] = useState('EN');
  const [translatedText, setTranslatedText] = useState('');

  // write function to handle translate
  // const handleTranslate (text)
  // try to post request and store in response
  // if response.ok setTranslatedText to response.data.translatedText
  // catch(error)
 //---------------------------EXAMPLE---------------------------------
  // const handleTranslate = async (text) => {
  //   try {
  //     const response = await axios.post('http://localhost:3001/translate', {
  //       text: text,
  //       targetLang: language,
  //     });
  //     setTranslatedText(response.data.translatedText);
  //   } catch (error) {
  //     console.error('Error translating text:', error);
  //   }
  // };
  
  return (
    <>
      <div className='m-4'>
        <Header />
        
        <TwpDateProvider>
            <div className = "container">
                <Languages />
                <div className="row">
                    <div className="col-6">
                        < TwpForm />
                    </div>
                    
                    <div className="col-6">
                         {/* < TwpDate /> */}
                    </div>
                 
                </div>
            </div>
        </TwpDateProvider>

        <Footer />
      </div>
    </>
  )
}



export default App;
