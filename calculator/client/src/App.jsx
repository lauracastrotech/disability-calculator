/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from 'react'
import Header from './components/Header';
import TwpCalculator from './pages/TwpCalculator';
import Footer from './components/Footer';

// Create context for the date that the TWP ends
export const TwpDateContext = createContext(null);
// GETTING WARNING THAT VALUE PROP IS REQUIRED FOR CONTEXT PROVIDER



function App() {
  const [twpDate, setTwpDate] = useState(TwpDateContext)

  // addUserDate
    // take form data object as a parameter
    // send data to database
  
  // calculateTwpDate
    // take income and date
    // initialize income  limit
    // if income >= 1110
      // add 9 months to the date
      // return date that is the first of the 10 month

  return (
    <>
      <div className='m-4'>
        <Header />

        <TwpDateContext.Provider>
          <TwpCalculator value = {twpDate}/>
        </TwpDateContext.Provider>
        
        <Footer />
      </div>
    </>
  )
}



export default App;
