import React, { useState } from "react";

const Typer = (props) => {
  const [word, setWord] = useState("");

    const typeHandler = (e) => {
    setWord(e.target.value);
    if (word === props.randWord) {
      e.target.value = "";
      props.getWord();
    }
  };

  return (
    <input
    autoFocus={true}
      id="typeInput"
      autoComplete="off"
      placeholder={props.time === 0 ? "Game Over" : "Type the word here"}
      onChange={typeHandler}
    ></input>
  );
};

export default Typer;
