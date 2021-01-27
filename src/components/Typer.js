import React, { useState } from "react";

const Typer = (props) => {
  const [word, setWord] = useState("");
  // const [play, setPlay] = useState(false)

  // const playing = () => {
  //   while(!props.paused) {
  //     setPlay(true)
  //   }
  // }  

  
  const typeHandler = (e) => {
    setWord(e.target.value);
    if (word === props.randWord) {
      e.target.value = "";
      props.getWord();
    }
  };

  return (
    <input
     autoFocus
      id="typeInput"
      autoComplete="off"
      placeholder= "Type the word here"
      onChange={typeHandler}
    ></input>
  );
};

export default Typer;
