import { createContext, useContext, useState } from "react";

// Create context
const TwpDateContext = createContext(null);

// Create context provider
const TwpDateProvider = ({ children }) => {
  // initialize the state that will be passed to value
  const [twpDate, setTwpDate] = useState([]);

  return (
    <TwpDateContext.Provider value={{ twpDate, setTwpDate }}>
      {children}
    </TwpDateContext.Provider>
  );
};

// Export this to use and update state throughout the application
const useTwpDateContext = () => useContext(TwpDateContext);

export { TwpDateProvider, useTwpDateContext }; //possibly the reason I get an error with string methods
