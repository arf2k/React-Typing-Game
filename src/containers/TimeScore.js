import React, {useState, useEffect} from 'react';
// import WordReceiver from './WordReceiver.js';
// import Typer from "../components/Typer.js"

const TimeScore = (props) => {

const [seconds, setSeconds] = useState(10)
const [over, setOver] = useState(false)
// const [paused, setPaused] = useState(true)

const countdown = () => {
     // if(paused || over) return;
     if(seconds === 0) setOver(true)
     else if (seconds > 0){
          setSeconds(seconds - 1 )
     }
}


useEffect(() =>  {
     if(props.clicked) {
     const timerId = setInterval(() => countdown(), 1000)
     return () => clearInterval(timerId)
     }
})


 

 return (
      <>
       {/* <button onClick={() =>setPaused(!paused) }>{paused? "Start" : "Pause"}</button> */}
      {seconds > 0? <h1>Time: {seconds}</h1> : <h1>Game Over</h1>}  */

 
   
      </>
 )



}

export default TimeScore 