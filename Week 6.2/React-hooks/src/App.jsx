import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [id, selectedId] = useState(1);
  
  return (
    <>
      <button onClick={()=>{
        selectedId(1)
      }}>1</button>
      <button onClick={()=>{
        selectedId(2)
      }}>2</button>
      <button onClick={()=>{
        selectedId(3)
      }}>3</button>
      <button onClick={()=>{
        selectedId(4)
      }}>4</button>

      <Todo id={id} />
    </>
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
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function(res){
      setTodos(res.data.todo)
    })
  }, [id]);
return <>

  <h1>{todos.title}</h1>
  <h2>{todos.description}</h2>
</>
}


export default App
