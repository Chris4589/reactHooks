import React from 'react'
import { useForm } from '../../hooks/useForm'
import { Message } from './Message';

export const SimpleFormCustomHook = () => {

  const { email, handlerOnchange, name } = useForm();

  return (
    <>
      <h1>useEffect custom</h1>
      <div>
                          {/* name="name" */}
        <input type="text" name="name" placeholder="tu name" value={name} onChange={handlerOnchange}/>
        <input type="text" name="email" placeholder="tu name" value={email} onChange={handlerOnchange}/>
        {/* <input type="text" placeholder="tu apellido" value={email}/> */}
      </div>

      {
        name === '123' && <Message/>
      }
    </>
  )
}
