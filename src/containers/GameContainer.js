import React, {useState, useEffect} from "react";
import WordReceiver from "./WordReceiver";
import TimeScore from "./TimeScore.js"


const GameContainer = (props) => {
  const [seconds, setSeconds] = useState(10);
  const [over, setOver] = useState(false);
  const [paused, setPaused] = useState(true);


  
  
//   const getWord = () => {
//      axios
//        .get(
//          `https://api.wordnik.com/v4/words.json/randomWord?&minLength=${wordMin}&maxLength=${wordMax}&api_key=${api_key}`
//        )
//        .then((response) => {
//          setRandWord(response.data.word);
//        });
//    };


const countdown = () => {
     // if (paused || over) return;
     if (seconds === 0) setOver(true);
    if (seconds > 0) {
       setSeconds(seconds - 1);
     }
   }

  useEffect(() => {
     if (props.clicked) {
       const timerId = setInterval(() => countdown(), 1000);
       return () => clearInterval(timerId);
     }
   });

  
  

  

  return (
    <>
     {/* <button onClick={() => setClicked(true)}>Start</button> */}
     {/* <button onClick={()=> getWord}>Word</button> */}

      <WordReceiver randWord={props.randWord}/>
      <TimeScore seconds={seconds}/>
   
    </>
  );
};

export default GameContainer;
