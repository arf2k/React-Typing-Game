import React from "react";
import styled from 'styled-components'

const WordReceiver = ({randWord}) => {
 
  return (
    <>
     <Title>Type This:</Title>
      <Title>{randWord}</Title>
    </>
  );
};

export default WordReceiver;

const Title = styled.h1`
font-family: Monotype News Gothic;
// text-align: center
`