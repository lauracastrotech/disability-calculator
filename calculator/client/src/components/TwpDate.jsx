import { useEffect } from "react";
import { useTwpDateContext } from "../context/TwpDateContext";
import { getTwpDate } from "../utilities/twpDateUtils";

export default function TwpDate() {
  const { twpDate } = useTwpDateContext();

  useEffect(() => {
    getTwpDate();
  }, []);

  return (
    <>
      <div className="container">
        <h2>{twpDate}</h2>
      </div>
    </>
  );
}
