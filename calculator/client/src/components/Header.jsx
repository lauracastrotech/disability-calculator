/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../styles/headerStyles.css";

export default function Header() {
  return (
    <div className="container hello">
      <div className="row">
        <h2 id="title" className="col-7">
          Ticket to Work Period Calculator
        </h2>
        <button id="login" className="rounded col-2">
          Login
        </button>
        <button id="create-account" className="rounded col-2">
          Create Account
        </button>
        <select id="lang" className="rounded col-1">
          <option value="EN">English</option>
          <option value="ES">Spanish</option>
          <option value="DE">German</option>
          <option value="FR">French</option>
        </select>
      </div>
      <div className="row">
        <p id="desc" className="mb-4">
          If you’ve started working, you continue receiving Social Security
          Disability Insurance (SSDI) up to 9 months where your monthly income
          equals or exceeds $1,110. Find out when your Trial to Work Period ends
          and prevent over payment.
        </p>
      </div>
    </div>
  );
}
