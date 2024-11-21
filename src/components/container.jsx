import React, { useContext } from 'react'
import Navbar from './Navbar'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Theme from './theme'
import { Todocontext } from '../contexts/TodoContext'
import ThemeToggler from './ThemeToggler'

const Container = () => {
    const { isLight } = useContext(Todocontext);
  return (
    <div className={`container ${isLight?'':'dark'}`}>
        <Navbar/>
        <TodoList/>
        <TodoForm/>
        <ThemeToggler/>


    </div>
  )
}

export default Container