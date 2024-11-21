import React, { createContext,useReducer,useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoReducer } from '../reducers/TodoReducer';

export const Todocontext = createContext();

const TodoContextProvider = (props) => {

    const [todos,dispatch] = useReducer(TodoReducer,[
        {task:'wakeup',time:12,id:uuidv4()},
        {task:'exercise',time:13,id:uuidv4()},
        {task:'coffe',time:14,id:uuidv4()}
    ]);
    console.log(todos);
    
    
    const [isLight,setIslight] = useState(true);
    

  return (
    <Todocontext.Provider value={{todos,isLight,setIslight,dispatch}}>
        {props.children}
    </Todocontext.Provider>
  )
}

export default TodoContextProvider;