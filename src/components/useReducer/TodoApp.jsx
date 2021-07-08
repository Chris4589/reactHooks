import React, { useEffect, useReducer, useState } from 'react'
import { TodoReducer } from './TodoReducer';

export const TodoApp = () => {

  const init = () => {
    console.log(JSON.parse(localStorage.getItem(`todos`)) || []);
    return JSON.parse(localStorage.getItem(`todos`)) || [];
  }

  const [state, dispatch] = useReducer(TodoReducer, [], init);
  const [desc, setDesc] = useState('');

  useEffect(() => {
    localStorage.setItem(`todos`, JSON.stringify(state));
  }, [state])

  const handlerDelete = (id) => {
    dispatch({type: 'delete', payload: id});
  }

  const handleToggle = (id) => {
    dispatch({type: 'toggle', payload: id});
  }

  return (
    <div>
      <h1>TodoAPP { state.length }</h1>
      <hr />

      <ul>
        {
          state.map((data) => 
            (<li key={data.id}>
              { data.desc }  - { data.done }
            <button onClick={() => handlerDelete(data.id)}
            >del</button> 

            <button onClick={() => handleToggle(data.id)}>
              toggle
            </button>
            </li>) 

          )
        }
      </ul>

        <form onSubmit={ (e) => { 
          e.preventDefault(); 
          dispatch({ type: 'add', payload: {
            id: new Date().getTime(),
            desc: desc,
            done: false,
          } });
          setDesc('');
          }}>
          <input type="text" name="desc" onChange={ (e) => { setDesc(e.target.value) }} value={desc} />
          <hr />
          <button>
            add new
          </button>
        </form>
      
    </div>
  )
}
