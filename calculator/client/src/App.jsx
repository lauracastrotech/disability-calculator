/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext, createContext } from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
import TwpForm from "./components/TwpForm";
import TwpDate from "./components/TwpDate";
import Footer from "./components/Footer";
import { getTwpDate } from "./utilities/twpDateUtils";
import { TwpDateProvider } from "./context/TwpDateContext";

function App() {
  useEffect(() => {
    getTwpDate("this is may");
  }, []);

  // addUser
  // input => newUser object comes from form state
  // output => undefined
  // try block => fetch "api/"

  // addIncome --- do this if you have time
  // input => userId, monthlyIncome, twpDate

  return (
    <>
      <div className="m-4">
        <Header />

        <TwpDateProvider>
          <div className="container">
            <Languages />
            <div className="row">
              <div className="col-6">
                <TwpForm />
              </div>

              <div className="col-6">{/* < TwpDate /> */}</div>
            </div>
          </div>
        </TwpDateProvider>

        <Footer />
      </div>
    </>
  );
}

export default App;
