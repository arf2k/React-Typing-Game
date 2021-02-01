import React from "react";
import styled from 'styled-components'

const WordReceiver = (props) => {
 
  return (
    <>
     <Title>Type This:</Title>
      <Title>{props.randWord}</Title>
    </>
  );
};

export default WordReceiver;

const Title = styled.h1`
font-family: Monotype News Gothic;
// text-align: center
`