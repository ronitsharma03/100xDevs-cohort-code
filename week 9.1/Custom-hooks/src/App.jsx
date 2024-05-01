import React, { useEffect } from 'react';
import { Component } from 'react';
import { useState } from 'react'
import axios from 'axios';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



// useTodo -> Custom Hook
function useTodo() {
  const [todos, settodos] = useState([]);
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(response => {
      settodos(response.data.todos);
    })
  }, []);

  return todos;
}
function App() {
  const todos = useTodo();
  return (
    <>
      {
        todos.map((todo, index) => <Track key={index} title={todo.title} description={todo.description}/>)
      }
    </>
  )
}

function Track({title, description}){
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}








// function App() {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       setRender(r => !r);
//     }, 5000);
//   }, []);

//   return (
//     <>
//       {render ? <MyComponent2 /> : <div>Component 2 unmounted</div>}
//     </>
//   )
// }
// class MyComponent2 extends Component{
  
//   // Inbuilt functions in class components

//   // Function that runs when the component mounts
//   componentDidMount(){
//     console.log("Component 2 mounted!");
//   }

//   // Function that runs when the component unmounts
//   componentWillUnmount(){
//     // Cleanup (e.g., Remove EventListeners or cancle subscriptions)
//     console.log("Component 2 unmounted!");
//   }

//   render() {
//     return (
//       <div>
//         Component 2 mounted
//       </div>
//     )
//   }
// }
// // function App() {
// //   const [count, setCount] = useState(0)

// //   const increment = () => {
// //     setCount(count + 1);
// //   }

// //   return (
// //     <>
// //       <h1>Count: {count}</h1>
// //       <button onClick={increment}>Increment</button>
// //     </>
// //   )
// // }

// // class MyComponent extends Component{
// //   constructor(props){
// //     super(props);
// //     this.state = {count: 0}
// //   }

// //   incrementCount = () => {
// //     this.setState({count: this.state.count + 1});
// //   }

// //   render () {
// //     return <div>
// //       <h1>
// //         {this.state.count}
// //       </h1>
// //       <button onClick={this.incrementCount}>Increment</button>
// //     </div>
// //   }
// // }

// // Lifecycle Events -->
// function MyComponent() {
//   useEffect(() => {
//     // This will run only on mounting of the component
//     console.log("Component mounted!");

//     // this return fn will only runs when the component unmounts or the depedency array changes!
//     return () => {
//       console.error("Component unmounted!");
//     }
//   }, []);

//   return (
//     <div>
//       Inside the MyComponent Render!
//     </div>
//   )
// }

export default App
