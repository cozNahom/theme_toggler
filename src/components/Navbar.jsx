import React, { useContext } from 'react'
import { Todocontext } from '../contexts/TodoContext'

const Navbar = () => {
    const {todos} = useContext(Todocontext);
  return (
    <div className='navbar'>
        <h1>my to do list</h1>
        <p>youn have {/*todos.length*/} tasks to do </p>
    </div>
  )
}

export default Navbar