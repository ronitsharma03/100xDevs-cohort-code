import React from 'react';
import { Component } from 'react';
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </>
//   )
// }

class MyComponent extends Component{
  constructor (props){
    super(props);
    this.state = {count: 0};
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.incrementCount}>Increment</button>
    </div>
  }
}

export default MyComponent
