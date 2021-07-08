import React, { useEffect } from 'react'

export const Message = () => {
  //unmount
  useEffect(() => {
    console.log('montado');

    const mouseMove = ({clientY, clientX}) => {
      console.log('algo que no se desmonta solo');
    }

    window.addEventListener('mousemove', mouseMove);

    return () => {
      //limpieza cuando se desmonta el componente
      console.log('desmontado - adios listener');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  return (
    <div>
      <h1>1</h1>
    </div>
  )
}
