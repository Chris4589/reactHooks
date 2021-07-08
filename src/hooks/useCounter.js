import { useState } from "react";

const useCounter = (value = 10) => {
  const [state, setCounter] = useState(value);

  const increment = () => {
    setCounter(state+1);
  }

  const decrement = () => {
    setCounter(state-1);
  }

  const reset = () => {
    setCounter(value);
  }

  return {
    state,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;