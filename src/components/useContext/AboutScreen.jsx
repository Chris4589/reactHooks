import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />

      <button onClick={() => setUser({})}>
        logout
      </button>
    </div>
  )
}
