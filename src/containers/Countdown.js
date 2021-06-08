import React, { useState, useEffect, useInterval } from "react";
import WordReceiver from "../components/WordReceiver";
import Timer from "../components/Timer.js";

const Countdown = ({randWord}) => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Timer seconds={seconds} />
      { (seconds > 0)? <WordReceiver randWord={randWord}/> : null }
    </>
  );
};

export default Countdown;
