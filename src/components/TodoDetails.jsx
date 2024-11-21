import React, { useContext, useReducer } from 'react'
import { Todocontext } from '../contexts/TodoContext'
import { TodoReducer } from '../reducers/TodoReducer';


const TodoDetails = ({todo}) => {
    const { dispatch } = useContext(Todocontext);
  return (
    <li  onClick={()=>dispatch({ type: 'TASK_REMOVER', id: todo.id })}>
        <div className="task">{todo.task}</div> 
        <div className="time">{todo.time}</div> 
    </li>
  )
}

export default TodoDetails;