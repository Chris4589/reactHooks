import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

  const { state, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>

      counter <Small value={state}/>
      <hr />
      <button onClick={() => increment()}>+1</button>

      <button onClick={() => setShow(!show)}>
        show/hide
      </button>
    </div>
  )
}
