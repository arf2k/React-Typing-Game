import React, {useState, useEffect} from "react";
import axios from "axios";
import WordReceiver from "./WordReceiver";
import Typer from "../components/Typer.js"
import TimeScore from "./TimeScore.js"

let api_key = process.env.REACT_APP_API_KEY;

const GameContainer = () => {
  const [randWord, setRandWord] = useState("");
  const [seconds, setSeconds] = useState(10);
  const [over, setOver] = useState(false);
  const [paused, setPaused] = useState(true);
  const [clicked, setClicked] = useState(false)
  const [wordMin, setWordMin] = useState(3);
  const [wordMax, setWordMax] = useState(5)

  
  
  
  
  
  
  
  const countdown = () => {
    if (paused || over) return;
    if (seconds === 0) setOver(true);
    else if (seconds > 0) {
      setSeconds(seconds - 1);
    }
  }

  useEffect(() => {
    if (clicked) {
      const timerId = setInterval(() => countdown(), 1000);
      return () => clearInterval(timerId);
    }
  });

  const getWord = () => {
    axios
      .get(
        `https://api.wordnik.com/v4/words.json/randomWord?&minLength=${wordMin}&maxLength=${wordMax}&api_key=${api_key}`
      )
      .then((response) => {
        setRandWord(response.data.word);
      });
  };

  return (
    <>
    <button onClick={() => setClicked(true)}>Start</button>
      <WordReceiver getWord={getWord} randWord={randWord}/>
      <TimeScore/>
      <Typer seconds={seconds} />
    </>
  );
};

export default GameContainer;
