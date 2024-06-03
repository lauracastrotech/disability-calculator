/* eslint-disable no-unused-vars */
import { useTwpDateContext } from "../context/TwpDateContext";
import "../styles/scss/twpDateStyles.css";

export default function TwpDate() {
  const { twpDate } = useTwpDateContext();

  let DATE_RESULT = twpDate.replace(",", "").split(" ");
  console.log(typeof DATE_RESULT);

  //split string at spaces
  // ['March','13','2025']

  return (
    <>
      <div className="container">
        <p id="twpDateTitle"> You&apos;re Trial to Work Period ends:</p>
      </div>
      <div className="container" id="dateContainer">
        <div className="circle">
          <p className="date-result" id="twpMonth">
            {DATE_RESULT[0]}
          </p>
          <p className="date-result" id="twpDay">
            {DATE_RESULT[1]}
            <br />
          </p>
          <p className="date-result" id="twpYear">
            {DATE_RESULT[2]}
          </p>
        </div>
      </div>
    </>
  );
}
