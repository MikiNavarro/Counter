import React from "react";
import { styled } from "styled-components";
import NumberDisplay from "../NumberDisplay";
import Button from "../Button";
import useCounter from "./useCounter";

const Counter: React.FC = () => {
  const { number, increaseNumber, resetNumber, decreaseNumber } = useCounter();

  return (
    <Layout>
      <NumberDisplay number={number} />
      <ButtonsContainer>
        <Button text={"Increase"} onClick={increaseNumber} />
        <Button text={"Reset"} onClick={resetNumber} />
        <Button text={"Decrease"} onClick={decreaseNumber} />
      </ButtonsContainer>
    </Layout>
  );
};

const Layout = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 30,
});

const ButtonsContainer = styled("div")({
  display: "flex",
  gap: 20,
});

export default Counter;
