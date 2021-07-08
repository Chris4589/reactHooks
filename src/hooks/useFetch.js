import axios from "axios";
import { useEffect, useRef, useState } from "react"

export const useFetch = (value) => {

  const isMounted = useRef(true);

  const url = `https://www.breakingbadapi.com/api/quotes/${value}`;

  const [state, setState] = useState({ data: null, loading: true, error: false });

  useEffect(() => {
    
    return () => {
      isMounted.current = false;
      console.log('desmontado')
    }
  }, [])

  useEffect(() => {

    setState({ data: null, loading: true, error: false })

    axios.get(`${url}`).then((({data})=> {
      setTimeout(() => {
        if (isMounted.current) {
          setState({ data, loading: false, error: false });
        }
        
      }, 2000);
    }));
    return () => {
      
    }
  }, [url])

  return {
    state
  }
}
