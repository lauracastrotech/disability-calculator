// import { useState, useEffect, useContext, createContext } from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
import TwpForm from "./components/TwpForm";
import TwpDate from "./components/TwpDate";
import Footer from "./components/Footer";
import { TwpDateProvider } from "./context/TwpDateContext";

function App() {
  const addUser = async user => {
    try {
      //let response = await fetch("/formdata/users", {
      let response = await fetch("/formdata/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...user })
      });

      console.log("user variable passed to addUser func", user);

      if (response.ok) {
        let data = await response.json();
        console.log(data);
      } else {
        console.log(`Server Error: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      console.log(`Network error: ${e.message}`);
    }
  };

  return (
    <>
      <div className="m-4">
        <Header />
        <TwpDateProvider>
          <Languages />
          <div className="container">
            <div className="row">
              <div className="col-6">
                <TwpForm addUser={addUser} />
              </div>
              <div className="col-6">
                <TwpDate />
              </div>
            </div>
          </div>
        </TwpDateProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
