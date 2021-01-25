import React, {useState} from 'react';
import WordReceiver from './WordReceiver.js';
// import Typer from "../components/Typer.js"

const TimeScore = () => {

     const [seconds, setSeconds] = useState(10)

  
     const startTime = () => {
          setInterval(countdown, 1000)
     }

     const countdown = () => {
         if(seconds > 0) {
              setSeconds(seconds - 1) }
     }
     const resetTime = () => {
          clearInterval(seconds)
          setSeconds(10)

     }
 

 return (
      <>
      <h1>Time: {seconds}</h1>
      <WordReceiver startTime={startTime} resetTime={resetTime} seconds={seconds}/> 
      </>
 )



}

export default TimeScore 