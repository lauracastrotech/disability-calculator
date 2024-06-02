/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import DeepLTranslator from "./DeepL";

export default function Header() {
  return (
    <div className="container">
      <h4>
        <span className="material-symbols-outlined m-2">
          confirmation_number
        </span>
        Disability Calculator
      </h4>
      <p className="m-2">
        If you are enrolled in Ticket to Work, you know that you continue to
        receive disability benefits. This calculator takes your monthly income
        and the date that you began working. It will give you the month that you
        will stop receiving benefits. This will help to
      </p>
      {/* <DeepLTranslator /> */}
    </div>
  );
}
