import { useState } from 'react'

import './App.css'

function App() {
  let counter = 4;
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "Go to gym from 7 to 9 PM"
    },
    {
      id: 2,
      title: "Study DSA",
      description: "Study DSA from 6 to 10 AM"
    },
    {
      id: 3,
      title: "Study MERN",
      description: "Study MERN from 3 to 8 PM"
    }
  ]);

  function addTodo(){
    setTodos([...todos, {
      id: counter++,
      title: "Eat food",
      description: "Have Lunch at 2 PM"
    }])
  }
 
  return (
    <>
        <button onClick={addTodo} style={{padding: 15, backgroundColor: "white", fontSize: 20, color: "black"}}>Add new Todo</button>
        {
          todos.map(function (todo){
            return (
              <Todo key={todo.id} title={todo.title} description={todo.description} />
            )
          })
        }    
    </>
  )
}

function Todo({title, description}){
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default App
