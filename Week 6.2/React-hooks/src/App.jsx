import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  return (
      <Todo id={3} />
  )
}

function Todo({id}){
  const [todos, setTodos] = useState({});

  useEffect(()=>{
    // fetch("https://sum-server.100xdevs.com/todo?id="+ id)
    // .then(async function(response){
    //   const json = await response.json();
    //   setTodos(json.todo);
    // })
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(function(res){
      setTodos(res.data.todo)
    })
  }, []);
return <>

  <h1>{todos.title}</h1>
  <h2>{todos.description}</h2>
</>
}


export default App
