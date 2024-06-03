/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import Languages from "./Languages";

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <h3 className="col-8">Ticket to Work Period Calculator</h3>
        <button className="btn btn-primary col-2">Login</button>
        <button className="btn btn-primary col-2">Create Account</button>
      </div>
      <div className="row">
        <p className="col-10">
          If you are enrolled in Ticket to Work, you know that you continue to
          receive disability benefits. This calculator takes your monthly income
          and the date that you began working. It will give you the month that
          you will stop receiving benefits. This will help to
        </p>
        <select className="col-2">
          <option value="EN">English</option>
          <option value="ES">Spanish</option>
          <option value="DE">German</option>
          <option value="FR">French</option>
        </select>
      </div>
    </div>
  );
}
