import { useEffect, useState } from 'react'


function App() {

  const [todo, setTodo] = useState(null);

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos").then(async (res)=>{
      const jsonData = await res.json();
      setTodo(jsonData.todos);
    })
  }, []);

  return (
    <>
      {
  
        todo ? <Todo todos={todo} /> : <p>Loading Data .... </p>
      }
    </>
  )
}


function Todo({ todos }) {
  
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <p>{todo.completed}</p>
        </div>
      ))}
    </div>
  );
}



export default App
