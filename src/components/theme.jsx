import React, { useContext } from 'react'
import { Todocontext } from '../contexts/TodoContext';

const Theme = () => {
    const { isLight,setIslight } = useContext(Todocontext);
    const themeToggler = () => {
        setIslight( prev => !prev );
        

    }
  return (
    <div className='theme'>
        <button onClick={themeToggler}>theme</button>
    </div>
  )
}
export default Theme;