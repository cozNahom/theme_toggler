//import uuid from 'uuid/v4';
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'TASK_ADDER':
      return [...state, {
        task: action.todo.task, 
        time: action.todo.time, 
        id: uuidv4()}
      ]
    case 'TASK_REMOVER':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
} 