/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from 'react'
import Header from './components/Header';
import TwpCalculator from './pages/TwpCalculator';
import Footer from './components/Footer';

// Create context for the date that the TWP ends
const EndDateContext = createContext(null);

function App() {


  // addUserTwp
    // take form data object as a parameter
    // send data to database
  

  return (
    <>
      <Header />
      <TwpCalculator />
      <Footer />
    </>
  )
}



export default App;
