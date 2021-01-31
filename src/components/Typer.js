import React, { useState } from "react";
import GameContainer from '../containers/GameContainer.js'
import axios from "axios";
let api_key = process.env.REACT_APP_API_KEY;


const Typer = (props) => {
  const [randWord, setRandWord] = useState("");
  const [word, setWord] = useState("");
  const [wordMin, setWordMin] = useState(3);
  const [wordMax, setWordMax] = useState(5)
  const [clicked, setClicked] = useState(false)


  // const [play, setPlay] = useState(false)

  // const playing = () => {
  //   while(!props.paused) {
  //     setPlay(true)
  //   }
  // }  

  const getWord = () => {
    axios
      .get(
        `https://api.wordnik.com/v4/words.json/randomWord?&minLength=${wordMin}&maxLength=${wordMax}&api_key=${api_key}`
      )
      .then((response) => {
        setRandWord(response.data.word)
        setClicked(true);
      });
  };
  
  const typeHandler = (e) => {
    setWord(e.target.value);
    if (word === randWord) {
      e.target.value = "";
      getWord();
    }
  };

  return (
   <>
    <input
     autoFocus
      id="typeInput"
      autoComplete="off"
      placeholder= "Type the word here"
      onChange={typeHandler}
    ></input>
    <button onClick={getWord}>Start</button>
    <GameContainer clicked={clicked} randWord={randWord}/>
    </>
  );
};

export default Typer;
