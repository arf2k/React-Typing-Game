import React, { useState} from "react";
import axios from "axios";
import TimeScore from "./TimeScore.js"
import Typer from "../components/Typer.js"

let api_key = process.env.REACT_APP_API_KEY;

const WordReceiver = (props) => {
  const [randWord, setRandWord] = useState("");
  const [challenge, setChallenge] = useState("easy");
  const [wordMin, setWordMin] = useState(3);
  const [wordMax, setWordMax] = useState(5)
  const [clicked, setClicked] = useState(false)
  // const [difficulty, setDifficulty] = useState(false)

const beginGame = () => {
  // selectDifficulty(challenge)
  getWord()
}

  const selectDifficulty = () => {
    if (challenge === "easy") {
      setWordMin(3);
      setWordMax(5)
      // setDifficulty(true);
    } else if (challenge === "medium") {
      setWordMin(5);
      setWordMax(9);
      // setdifficulty(true)
    } else if (challenge === "hard") {
      setWordMin(7);
      setWordMax(13);
      // setDifficulty(true)
    }
  };

  console.log(challenge)
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



  return (
    <>
      <div id="settings" className="settings">
        <form id="settings-form" onChange={(e) => setChallenge(e.target.value)}>
          <label>Set Difficulty</label>
          <div className="selectionDiv">
            <select id="difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </form>
      </div>
      <TimeScore clicked={clicked} />
      <h1>Word:</h1>
      <h1>{randWord}</h1>
      <button onClick={beginGame, () => setClicked(true)}>Start</button>
      <Typer randWord={randWord} getWord={getWord} countdown={props.countdown}/>

    </>
  );
};

export default WordReceiver;
