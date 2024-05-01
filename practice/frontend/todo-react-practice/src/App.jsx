import { useState } from 'react'
import { Todo } from '../components/Todos'
import { CreateTodo } from '../components/CreateTodo'

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <>
    <CreateTodo />
     <Todo todos={todos} setTodos={Todo}/>
    </>
  )
}

export default App
