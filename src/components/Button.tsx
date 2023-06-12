import React from "react";
import { styled } from "styled-components";

const Button: React.Element = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => <StyledButton onClick={onClick}>{text}</StyledButton>;

const StyledButton = styled("div")({
  border: "2px solid gray",
  borderRadius: 5,
  padding: "5px 15px",
  textTransform: "uppercase",
  letterSpacing: 3,
  cursor: "pointer",
  "&:hover": {
    color: "blue",
    border: "2px solid blue",
  },
});

export default Button;
