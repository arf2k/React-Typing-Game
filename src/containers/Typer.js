import React, { useState } from "react";
import Countdown from './Countdown.js'
import axios from "axios";
import { Button } from 'semantic-ui-react';
import styled from 'styled-components'
import Speaking from './Speaking.js'
import WordReceiver from "../components/WordReceiver.js";
let api_key = process.env.REACT_APP_API_KEY;


const Typer = (props) => {
  const [randWord, setRandWord] = useState("");
  const [word, setWord] = useState("");
  const [wordMin, setWordMin] = useState(3);
  const [wordMax, setWordMax] = useState(5)

  const getWord = () => {
    axios
      .get(
        `https://api.wordnik.com/v4/words.json/randomWord?&minLength=${wordMin}&maxLength=${wordMax}&api_key=${api_key}`
      )
      .then((response) => {
        console.log(response)
        setRandWord(response.data.word)
       ;
      });
  };


  const typeHandler = (e) => {
    setWord(e.target.value);
    if (word === randWord) {
      e.target.value = "";
      getWord()
      increaseDiff();
    }
  };

  const increaseDiff = () => {
    setWordMin(wordMin + 1)
    setWordMax(wordMax + 1)
  }


  return (
   <>
   <Button className="ui red button" onClick={getWord}>Start</ Button>
    <Countdown/>
    <WordReceiver randWord={randWord}/>
    <Speaking randWord={randWord}/>
    <input
     autoFocus
      id="typeInput"
      autoComplete="off"
      placeholder= "Type the word here"
      onChange={typeHandler}
    ></input>
    </>
  );
};

export default Typer;

// const Center = styled.div`
// justify-content: center;
// `
