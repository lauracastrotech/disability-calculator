/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext, createContext } from 'react'
import {getTwpDate} from './utilities/twpDateUtils';
import Header from './components/Header';
import Footer from './components/Footer';
import TwpCalculator from './pages/TwpCalculator';

function App() {

  useEffect(() => {
    getTwpDate('this is may');
  }, []);
  
  return (
    <>
      <div className='m-4'>
        <Header />
        <TwpCalculator />
        <Footer />
      </div>
    </>
  )
}



export default App;
