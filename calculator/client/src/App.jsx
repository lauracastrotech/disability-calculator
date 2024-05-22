/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from 'react'
import Header from './components/Header';
import TwpCalculator from './pages/TwpCalculator';

// Create context for the date that the TWP ends
const EndDateContext = createContext(null);

function App() {
  

  return (
    <>
      <Header />
      <TwpCalculator />
    </>
  )
}

export default App
