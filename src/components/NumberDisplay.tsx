import React from "react";
import { styled } from "styled-components";

const NumberDisplay: React.Element = ({ number }: { number: number }) => (
  <NumberTypography>{number}</NumberTypography>
);

const NumberTypography = styled("p")({
  color: "red",
  fontSize: "50px",
});

export default NumberDisplay;
