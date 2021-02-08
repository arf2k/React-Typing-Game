import React from 'react';

const Speaking = (props) => {

const synth = window.speechSynthesis

const utter  = new SpeechSynthesisUtterance(props.randWord)




   return (
      <>
   {synth.speak(utter)}
       </>
   )
}




export default Speaking