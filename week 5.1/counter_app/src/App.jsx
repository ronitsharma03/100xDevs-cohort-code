import { useState } from "react";


// Anytime a parent re-renders its child also re-renders
// 
function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Go to Gym from 7 to 9"
    },
    {
      title: "Study MERN",
      description: "Study MERN from 10 to 12"
    },
    {
      title: "Study DSA",
      description: "Study DSA from 12 to 2"
    }
]);

  function addTodo(){
    setTodos([...todos, {
      title: "Hello Bacho",
      description: "Aaj hum physics pdhenge"
    }]); 
  }
  return (
    <div>
      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}


function Todo(props) {

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}
export default App;
