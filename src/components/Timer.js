import React from 'react';
import styled from 'styled-components'


const Timer = (props) => {

 return (
      <>
      <Clock>
      {props.seconds > 0? <Time>Time: {props.seconds}</Time> : <Time>Game Over</Time>}  
      </Clock>
      </>
 )

}

export default Timer

const Clock = styled.div`
border: solid;
background: radial-gradient(ellipse at center, red, black);
padding: 30px;
margin: 20px;
width: 150px;
border-radius: 50%;
`

const Time = styled.h1
`
font-family: Share Tech Mono;
color: #ffc4c4;
text-align: center;

`


