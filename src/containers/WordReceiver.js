import React, { useState } from "react";
import axios from "axios";
// import Typer from "../components/Typer.js"

let api_key = process.env.REACT_APP_API_KEY;

const WordReceiver = () => {
  const [randWord, setRandWord] = useState("");
  const [wordMin, setWordMin] = useState(3);
  const [wordMax, setWordMax] = useState(5);
  const [challenge, setChallenge] = useState("easy");
  const [typedWord, setTypedWord] = useState("");

  const startGame = () => {
    selectDifficulty(challenge);
    getWord();
  };

  const selectDifficulty = () => {
    if (challenge === "easy") {
      setWordMin(3);
      setWordMax(5);
    } else if (challenge === "medium") {
      setWordMin(5);
      setWordMax(9);
    } else if (challenge === "hard") {
      setWordMin(7);
      setWordMax(13);
    }
  };

  const getWord = () => {
    axios
      .get(
        `https://api.wordnik.com/v4/words.json/randomWord?&minLength=${wordMin}&maxLength=${wordMax}&api_key=${api_key}`
      )
      .then((response) => {
        console.log(response);
        setRandWord(response.data.word);
      });
  };

  const typeHandler = (e) => {
    setTypedWord(e.target.value);
    if (typedWord === randWord) {
      e.target.value = "";
      getWord();
    }
  };

  return (
    <>
      <div id="settings" className="settings">
        <form id="settings-form" onChange={(e) => setChallenge(e.target.value)}>
          <label>Set Difficulty</label>
          <div class="selectionDiv">
            <select id="difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </form>
      </div>
      <button onClick={startGame}>Start Game</button>
      <h1>Word:</h1>
      <h1>{randWord}</h1>
      <input
        autoFocus="on"
        id="typeInput"
        autoComplete="off"
        placeholder="Type the word here"
        onChange={typeHandler}
      ></input>
    </>
  );
};

export default WordReceiver;
