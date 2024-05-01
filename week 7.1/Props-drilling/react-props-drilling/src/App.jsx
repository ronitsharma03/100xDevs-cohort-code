import { useContext, useState } from 'react'

import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  )
}


function Count({ setCount }) {
  return <div style={{ marginBottom: "10px" }}>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer(){
  const count = useContext(CountContext);
  return <div style={{fontSize: "3rem"}}>
    {count}
  </div>
}


function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div style={{ display: "flex", gap: "20px" }}>

      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease</button>

      <button onClick={() => {
        setCount(count + 1)
      }}>Increase</button>
    </div>
  )
}

export default App
