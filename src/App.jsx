import { useContext } from 'react'
import './App.css'
import TodoContextProvider, { Todocontext } from './contexts/TodoContext'
import Container from './components/container'

function App() {
  
  
  return (
  <div className='App'>
    
      <TodoContextProvider>
        <Container/>
      </TodoContextProvider> 
       
  </div>
        
     
    
  )
}

export default App
