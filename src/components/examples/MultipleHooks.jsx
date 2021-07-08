import React from 'react'
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleHooks = () => {
  const  { state:counter, increment } = useCounter(1);

  const { state:{data, loading} } = useFetch(`${counter}`);

  const { quote, author, series } = (!!data && data[0]);
  
  return (
    <div>
      <h1>Custom hooks</h1>

      {
        loading ?
        (
          <h1>cargando...</h1>
        )
        :
        (
        

          <div className="">
            Author { author } <br />
            msg { quote } <br />
            series { series } <br />
          </div>
        )
      }
      

      

      <button onClick={(e) => increment()}>next comment</button>
    </div>
  )
}

