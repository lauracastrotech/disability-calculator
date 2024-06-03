// import { useState, useEffect, useContext, createContext } from "react";
import Header from "./components/Header";
import TwpForm from "./components/TwpForm";
import TwpDate from "./components/TwpDate";
import Footer from "./components/Footer";
import { TwpDateProvider } from "./context/TwpDateContext";

function App() {
  const addUser = async user => {
    try {
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
      <div className="m-3">
        <TwpDateProvider>
          <div className="container">
            <Header />
            <div className="row">
              <div className="col-6">
                <TwpForm addUser={addUser} />
              </div>
              <div className="col-6">
                <TwpDate />
              </div>
            </div>
            <Footer />
          </div>
        </TwpDateProvider>
      </div>
    </>
  );
}

export default App;
