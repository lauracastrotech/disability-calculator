/* eslint-disable no-unused-vars */
import { useTwpDateContext } from "../context/TwpDateContext";

export default function TwpDate() {
  const { twpDate } = useTwpDateContext();

  return (
    <>
      <div className="container">
        <p> Your Trial to Work Period ends:</p>
        <h2>{twpDate}</h2>
      </div>
    </>
  );
}
