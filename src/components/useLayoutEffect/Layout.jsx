import React, { useLayoutEffect, useRef } from 'react'
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const Layout = () => {
  const  { state:counter, increment } = useCounter(1);

  const { state:{data, loading} } = useFetch(`${counter}`);

  const { quote, author, series } = (!!data && data[0]);

  const pTag = useRef();

  useLayoutEffect(() => {
    console.log(`se renderizo TODO el componente`);

    console.log(pTag.current.getBoundingClientRect());
    
  }, [quote]);
  
  return (
    <div>
      <h1>Custom hooks</h1>

      <div className="">
        Author { author } <br />
        <p ref={pTag}>msg { quote } <br /></p>
        
        series { series } <br />
      </div>
      

      

      <button onClick={(e) => increment()}>next comment</button>
    </div>
  )
}
