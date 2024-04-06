import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Count currCount={count}/>
      <Buttons count={count} setCount={setCount}/>
    </>
  )
}


function Count({currCount}) {
  return <div style={{fontSize: "2rem", marginBottom: "10px"}}>
    {currCount}
  </div>

}


function Buttons({count, setCount}) {
return (
  <div style={{display: "flex", gap: "20px"}}>
    
    <button onClick={()=>{
      setCount(count - 1)
    }}>Decrease</button>

    <button onClick={()=>{
      setCount(count + 1)
    }}>Increase</button>
  </div>
)
}

export default App
