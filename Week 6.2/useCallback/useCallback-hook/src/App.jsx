import { memo, useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'


//Example of custom hooks in react

function useTodos() {
  // State variables can't be defined in any native function
  // It should be kind of component or hook that let you define the state variables inside them
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function (res) {
        setTodos(res.data.todos);
      })
  })
}

function App() {
  // Use your custom hook here 
  const todos = useTodos();
  

  // And here we can map to the todos received and render them accordingly!
  return (
    <>
      {todos}
    </>
  )



  // const [count, setCount] = useState(0)

  //Here when the variable is a number and it's rerender can be stopped by using simple memo()
  //But if it is a object or function then memo() cant be used to stop its rerenders because though the value is same but the reference is not the same
  //To stop its rerender we have to use useCallback that does same as useMemo 

  // let a = 1;

  // function a(){
  //   console.log("a reneder")
  // }

  // const a = useCallback(function(){
  //   console.log("Re-render 1");
  // }, []);
  //It also takes a dependency array that tels it when to compute the function again!

  // return (
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <Demo a={a}/>
  //     </div>
  // )


}

const Demo = memo(function ({ a }) {
  console.log("Demo rerenders");
  return <div>
    h1 there {a}
  </div>
});

export default App
