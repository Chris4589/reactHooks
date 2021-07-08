import React, { useEffect, useMemo, useState } from 'react'
import useCounter from '../../hooks/useCounter';

export const MemorizeHook = () => {
  const { state, increment } = useCounter(100);

  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for (let index = 0; index < iteraciones; index++) {
      console.log(`ya vamos`);
      
    }

    return `${iteraciones} iteraciones`;
  }

  useEffect(() => {
    console.log(`effect`);
    procesoPesado(state)
    return () => {
      
    }
  }, [state])

  const memorizadoProceso = useMemo(() => procesoPesado(state), [ state ]); //procesa la info cada ves que "state" cambia

  return (
    <div>
      <h1>Memorize hook</h1>

      <h1>counter {state}</h1>

      <p>{ memorizadoProceso }</p>
      <hr />
      <button onClick={() => increment()}>+1</button>

      <button onClick={() => setShow(!show)}>
        show/hide
      </button>
    </div>
  )
}
