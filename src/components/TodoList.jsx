import React, { useContext, useState } from 'react'
import { Todocontext } from '../contexts/TodoContext';
import TodoDetails from './TodoDetails';


const TodoList = () => {

    const {todos}=useContext(Todocontext);
    console.log('datas'+todos);
    
   return (
    <div className='todo-list'>
        <ul>
            { todos.map(todo=>{
                return (
                    <TodoDetails todo={todo} key={todo.id}/>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoList