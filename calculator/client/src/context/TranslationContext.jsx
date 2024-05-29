/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'
import axios from 'axios';

// This file should have translation-related stae and functions


// Create context 
const TranslationContext = createContext(null);

// This is a custom hook that allows ay component to access the translation context
const useTranslationContext = () => useContext(TranslationContext);

// Create context provider
const TranslationProvider = ({children}) => {

  // initialize the state that will be passed to value
  const [language, setLanguage] = useState('EN'); // this state is the language to be translated
  const [descriptionText, setDescriptionText] = useState('');
  const [formLabelText, setLabelText] = useState({
                                            firstName: '',
                                            lastName: '',
                                            employDate: null
                                        })
  const [footerText, setfooterText] = useState('')
  // possibly need a state var for the languages based on what the user selects
  
  return(
    <TranslationContext.Provider value={{language, setLanguage}}>
      {children} {/*all child components within this provider will have access to language and setLanguage*/}
    </TranslationContext.Provider>
  )
}

export {TranslationProvider, useTranslationContext};