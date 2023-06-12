import React from "react";

const useCounter = () => {
  const [number, setNumber] = React.useState(0);

  const increaseNumber = () => setNumber(number + 1);
  const resetNumber = () => setNumber(0);
  const decreaseNumber = () => setNumber(number - 1);

  return { number, increaseNumber, resetNumber, decreaseNumber };
};

export default useCounter;
