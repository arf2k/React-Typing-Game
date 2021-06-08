import "./App.css";
import GameContainer from "./containers/GameContainer.js";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Title>Alex's Typing Game</Title>
      <GameContainer />
    </>
  );
};

export default App;

const Title = styled.h1`
  font-family: Monotype News Gothic;
  text-align: center;
`;
