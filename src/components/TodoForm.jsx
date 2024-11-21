import {React,useContext,useState} from 'react'
import { Todocontext } from '../contexts/TodoContext';

const TodoForm = () => {
    const {dispatch}=useContext(Todocontext);

    const [task,setTask]=useState('');
    const [time,setTime]=useState('');

    const submitHandle = (e)=>{
        e.preventDefault();
        dispatch({ type: 'TASK_ADDER', todo: { task, time }});
        setTask('');
        setTime('');
    };
  return (
    <form onSubmit={submitHandle}>
        <input type="text"  placeholder="name"  value={task}
        onChange={(e)=>setTask(e.target.value)} required/>
        <input type="text"  placeholder="time"  value={time}
        onChange={(e)=>setTime(e.target.value)} required/>
        <input type="submit"  value="add task"/>
    </form>
  )
}

export default TodoForm