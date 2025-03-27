import React, { useContext } from 'react'
import { UserContext } from '../store/provider';

const Child = () => {
  const user =  useContext(UserContext);
  return (
    <div>
      Child is rendering user data coming from parent directly
      {user}
    </div>
  )
}

export default Child;
