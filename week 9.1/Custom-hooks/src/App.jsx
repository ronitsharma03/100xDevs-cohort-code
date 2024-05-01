import React, { useEffect } from 'react';
import { Component } from 'react';
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      // setRender(r => !r);
    }, 3000);
  }, []);

  return (
    <>
      {render ? <MyComponent /> : <div>Component 2</div>}
    </>
  )
}
class MyComponent2 extends Component{
  
  // Inbuilt functions in class components

  // Function that runs when the component mounts
  componentDidMount(){
    console.log("Component 2 mounted!");
  }

  // Function that runs when the component unmounts
  componentWillUnmount(){
    console.log("Component unmounted!");
  }

  render() {
    return (
      <div>
        Hi using class component!
      </div>
    )
  }
}
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

// class MyComponent extends Component{
//   constructor(props){
//     super(props);
//     this.state = {count: 0}
//   }

//   incrementCount = () => {
//     this.setState({count: this.state.count + 1});
//   }

//   render () {
//     return <div>
//       <h1>
//         {this.state.count}
//       </h1>
//       <button onClick={this.incrementCount}>Increment</button>
//     </div>
//   }
// }

// Lifecycle Events -->
function MyComponent() {
  useEffect(() => {
    // This will run only on mounting of the component
    console.log("Component mounted!");

    // this return fn will only runs when the component unmounts or the depedency array changes!
    return () => {
      console.error("Component unmounted!");
    }
  }, []);

  return (
    <div>
      Inside the MyComponent Render!
    </div>
  )
}

export default App
