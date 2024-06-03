/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useTwpDateContext } from "../context/TwpDateContext";
import { DateTime } from "luxon";
import "../styles/twpFormStyles.css";

export default function TwpForm({ addUser }) {
  const EMPTY_USER_FORM = {
    firstName: "",
    lastName: "",
    startWindow: "",
    endWindow: "",
    income: ""
  };

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
      .toLocaleString(DateTime.DATE_FULL)
      .replace(",", "")
      .split(" ");

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
      <div id="calculate-form" className="container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName" className="mb-1">
              First Name
            </label>
            <div className="border-gradient">
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={user.firstName}
                id="firstName"
                onChange={e => handleChange(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="mb-1">
              Last Name
            </label>
            <div className="border-gradient">
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={user.lastName}
                id="lastName"
                onChange={e => handleChange(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="startWindow" className="mb-1">
              Date of Employment
            </label>
            <div className="border-gradient">
              <input
                type="date"
                className="form-control"
                name="startWindow"
                value={user.startWindow}
                id="startWindow"
                onChange={e => handleChange(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="income" className="mb-1">
              Monthly Income ($)
            </label>
            <div className="border-gradient">
              <input
                type="number"
                className="form-control"
                name="income"
                value={user.income}
                id="income"
                onChange={e => handleChange(e)}
              />
            </div>
            <small id="incomeHelp" className="form-text text-muted">
              Do not include your monthly disability benefit.
            </small>
          </div>
          <button
            id="calculate-btn"
            className="btn btn-outline-light m-2 "
            type="submit"
          >
            Calculate
          </button>
        </form>
      </div>
    </>
  );
}
