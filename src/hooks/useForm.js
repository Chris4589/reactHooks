import { useEffect, useState } from 'react'

export const useForm = () => {
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
    console.log('cada ves que cambia EMAIL campo - ejecuto axios digamos');
    
  }, [form.email]);

  return {
    handlerOnchange,
    form,
    email,
    name,
  }
}
