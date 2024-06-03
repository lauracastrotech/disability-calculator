/* eslint-disable no-unused-vars */
import { useTwpDateContext } from "../context/TwpDateContext";
import "../styles/twpDateStyles.css";

export default function TwpDate() {
  const { twpDate } = useTwpDateContext();
  console.log(typeof twpDate);
  console.log(twpDate);
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
            {twpDate[0]}
          </p>
          <p className="date-result" id="twpDay">
            {twpDate[1]}
            <br />
          </p>
          <p className="date-result" id="twpYear">
            {twpDate[2]}
          </p>
        </div>
      </div>
    </>
  );
}
