import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [secondValue, setSecondValue] = useState(100);
  const [isTimerOn, setIsTimerOn] = useState(false);

  useEffect(() => {
    let timerId;
    if (isTimerOn) {
      let timerValue = 100;
      timerId = setInterval(() => {
        console.log(timerValue);
        if (timerValue === 0) {
          clearInterval(timerId);
          setIsTimerOn(false);
        } else {
          setSecondValue((prev) => prev - 1);
          timerValue--;
        }
      }, [1000]);
    }
    return () => clearInterval(timerId);
  }, [isTimerOn]);

  return (
    <div>
      <h2>{secondValue} seconds</h2>
      <input type="range" className="range" value={100 - secondValue} />
      <button className="button" onClick={() => setIsTimerOn((prev) => !prev)}>
        {isTimerOn ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
}
