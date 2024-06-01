/* eslint-disable no-unused-vars */
// import{ TwpDateContext } from "../App"
import { useState } from "react";
import { useTwpDateContext } from "../context/TwpDateContext";
import { DateTime } from "luxon";

// Create form that has two inputs and one button
export default function TwpForm({ addUser }) {
  // import API key and assign it to a variable
  // create a function to translate text with in the form
  // const translateForm = (text) =>

  const EMPTY_USER_FORM = {
    firstName: "",
    lastName: "",
    startWindow: "",
    endWindow: "",
    income: ""
  };

  // Create income context to access value

  const [user, setUser] = useState(EMPTY_USER_FORM);

  const { twpDate, setTwpDate } = useTwpDateContext();

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setUser(state => ({ ...state, [name]: value }));
    console.log(user);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Add 9 months
    const twpDateConvert = DateTime.fromISO(user.startWindow)
      .plus({ months: 9 })
      .toLocaleString(DateTime.DATE_FULL);

    // Update twpDate
    setTwpDate(twpDateConvert);
    // console.log(`The previous twpDate value... ${twpDate}`);
    // console.log(`user info from input => ${JSON.stringify(user)}`);

    // addUser(user) to api
    //addUser(JSON.stringify(user));
    addUser(user);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group m-2">
            <label htmlFor="firstName" className="mb-1">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={user.firstName}
              id="firstName"
              onChange={e => handleChange(e)}
            />
          </div>

          <div className="form-group m-2">
            <label htmlFor="lastName" className="mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={user.lastName}
              id="lastName"
              onChange={e => handleChange(e)}
            />
          </div>

          <div className="form-group m-2">
            <label htmlFor="startWindow" className="mb-1">
              Date of Employment
            </label>
            <input
              type="date"
              className="form-control" //this causes an error
              name="startWindow"
              value={user.startWindow}
              id="startWindow"
              onChange={e => handleChange(e)}
            />
          </div>

          <div className="form-group m-2">
            <label htmlFor="income" className="mb-1">
              Monthly Income ($)
            </label>
            <input
              type="number"
              className="form-control"
              name="income"
              value={user.income}
              id="income"
              onChange={e => handleChange(e)}
            />
            <small id="incomeHelp" className="form-text text-muted">
              Do not include your monthly disability benefit.
            </small>
          </div>
          <button className="btn btn-primary btn-sm m-2" type="submit">
            Submit
          </button>
          {/* type="submit" */}
        </form>
      </div>
    </>
  );
}
