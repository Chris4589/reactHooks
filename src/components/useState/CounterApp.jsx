
import React, { useState } from "react";

const CounterApp = () => {

  const [counters, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });
  
  return (
    <>
    ----
      <h1>Num { counters.counter1 }</h1>
      <h1>Num { counters.counter2 }</h1>
      <hr />
      <button onClick={(e)=> setCounter({
        ...counters,
        counter1: counters.counter1+1,
      })}>
        +1 counter1
      </button>

      <button onClick={(e)=> setCounter({
        ...counters,
        counter2: counters.counter2+1,
      })}>
        +1 counter2
      </button>
    </>
  );
}

export default CounterApp;