import axios from "axios";
import { useEffect, useMemo, useState } from "react"

function App() {
  let [count, setCount] = useState(0);
  let [inputValue, setInput] = useState(1);
  
  // useMemo() example here 
  let finalCount = useMemo(()=>{
    console.log("Memo got called")
    let val = 0;
    for(let i = 1; i <= inputValue; i++){
      val += i;
    }
    return val;
  }, [inputValue]);
  
 
  return (
    <div>
      {/* <button onClick={()=>{
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

      <Todo id={id} /> */}

      {/* useMemeo examples */}

      <input type="text" onChange={function(e){
        let number = e.target.value;
        setInput(number);
      }} />
      <p>{`Sum from 1 to ${inputValue} is ${finalCount}`}</p>
      <button onClick={()=>{
        setCount(count + 1)
        
      }}>{`Counter (${count})`}</button>
    </div>
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
