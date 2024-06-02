/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { getTwpDate } from "../utilities/twpDateUtils";
import { useTwpDateContext } from "../context/TwpDateContext";

export default function TwpDate() {
  const { twpDate } = useTwpDateContext();

  // This renders a date
  // useEffect(() => {
  //   getTwpDate();
  // }, []);

  return (
    <>
      <div className="container">
        <h2>{twpDate}</h2>
      </div>
    </>
  );
}
