import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const Callback = () => {

  const [Counter, setCounter] = useState(10);

  /* const increment = () => {
    setCounter(Counter+1);
  } */

  const increment = useCallback(
    (num) => {
      setCounter( c => c + num );
    },
    [setCounter],
  );

  return (
    <div>
      <h1>useCallback</h1>
      c: { Counter } <hr />
      <ShowIncrement increment={increment}/>
    </div>
  )
}
