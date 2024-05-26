import { createContext, useContext, useState } from 'react'

// Create context 
const TwpDateContext = createContext(null);

// Create context provider
const TwpDateProvider = ({children}) => {

  // initialize the state that will be passed to value
  const [twpDate, setTwpDate] = useState(null) 
  
  return(
    <TwpDateContext.Provider value={{twpDate, setTwpDate}}>
      {children} {/*all child components within this provider will have access to twpDate and setTwpDate*/}
    </TwpDateContext.Provider>
  )
}

// Export this to use and update state throughout the application
const useTwpDateContext = () => useContext(TwpDateContext);

export {TwpDateProvider, useTwpDateContext};