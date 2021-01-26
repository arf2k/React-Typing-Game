import React, {useState, useEffect} from 'react';
import WordReceiver from './WordReceiver.js';
// import Typer from "../components/Typer.js"

const TimeScore = () => {

     const [seconds, setSeconds] = useState(10)
     const [isActive, setIsActive] = useState(false)


const toggle = () => {
     setIsActive(!isActive)
}

const reset = () => {
     setSeconds(10)
     setIsActive(false)
}    


useEffect(() => {
     let interval = null
     if(isActive) {
          interval = setInterval(() => {
               setSeconds( seconds => seconds -1)
          }, 1000)
     } else if (!isActive && seconds !== 0) {
          clearInterval(interval)
     }
     return () => clearInterval(interval)
}, [isActive, seconds])


//    const interval =  setInterval(() => {
//       setSeconds(seconds => seconds - 1)
//      }, 1000)
//      return () => clearInterval(interval)
// }



     

     // const countdown = () => {
     //     if(seconds > 0) {
     //          setSeconds(seconds - 1) }
     // }
     // const resetTime = () => {
     //      clearInterval(seconds)
     //      setSeconds(10)

     // }
 

 return (
      <>
      <h1>Time: {seconds}</h1>
      <WordReceiver toggle={toggle} reset={reset} seconds={seconds}/> 
      </>
 )



}

export default TimeScore 