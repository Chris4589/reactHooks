import React, { useState } from 'react'
import { MultipleHooks } from '../examples/MultipleHooks'

export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real</h1>
      <hr />
      { show && <MultipleHooks/> }


      <button onClick={(e) => { setShow(!show);}}>
        Show/Hide
      </button>
      
    </div>
  )
}
