/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'
import axios from 'axios';

// Create context 
const TranslationContext = createContext(null);

// Create context provider
const TranslationProvider = ({children}) => {

  // initialize the state that will be passed to value
  const [language, setLanguage] = useState('EN');
  // formText, headerText, footerText, twpDate text, boolean to toggle between languages?
  
  return(
    <TranslationContext.Provider value={{language, setLanguage}}>
      {children} {/*all child components within this provider will have access to language and setLanguage*/}
    </TranslationContext.Provider>
  )
}

// Export this to use and update state throughout the application
const useTranslationContext = () => useContext(TranslationContext);

export {TranslationProvider, useTranslationContext};