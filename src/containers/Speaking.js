import React from "react";

const Speaking = ({ randWord }) => {
  const synth = window.speechSynthesis;

  const utter = new SpeechSynthesisUtterance(randWord);

  return <>{synth.speak(utter)}</>;
};

export default Speaking;
