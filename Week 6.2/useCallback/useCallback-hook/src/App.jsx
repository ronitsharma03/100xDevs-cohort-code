import { memo, useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //Here when the variable is a number and it's rerender can be stopped by using simple memo()
  //But if it is a object or function then memo() cant be used to stop its rerenders because though the value is same but the reference is not the same
  //To stop its rerender we have to use useCallback that does same as useMemo 

  // let a = 1;

  // function a(){
  //   console.log("a reneder")
  // }

  const a = useCallback(function(){
    console.log("Re-render");
  }, []);
  //It also takes a dependency array that tels it when to compute the function again!

  return (
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Demo a={a}/>
      </div>
  )
}

const Demo = memo(function({a}){
  console.log("Demo rerenders");
  return <div>
    h1 there {a}
  </div>
});

export default App
