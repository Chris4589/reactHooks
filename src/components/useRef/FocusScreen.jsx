import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef({});//

  return (
    <div>
      <h1>focus screen</h1>
      <hr />
            {/* //useRef */}
      <input ref={inputRef} type="text" placeholder="name"/>
      <button onClick={(e) =>{ inputRef.current.select(); }}>
        Focus
      </button>
    </div>
  )
}
