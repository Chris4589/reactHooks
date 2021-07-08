import React, { useEffect, useState } from 'react'
import { Message } from './Message';
//racf
export const SimpleForm = () => {

  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  const {name, email} = form;

  const handlerOnchange = ({ target }) => {
    //name="name"
    setForm({
      ...form,
      //name="name" : value
      [target.name]: target.value
    });
  }

  useEffect(() => {
    //console.log('vacio solo se carga una ves - ejecuto axios digamos');
    
  }, [/* vacio solo se carga una ves */]);

  useEffect(() => {
    //console.log('cada ves que cambia form - ejecuto axios digamos');
    
  }, [form]);

  useEffect(() => {
    //console.log('cada ves que cambia EMAIL campo - ejecuto axios digamos');
    
  }, [form.email]);

  return (
    <>
      <h1>useEffect</h1>
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

