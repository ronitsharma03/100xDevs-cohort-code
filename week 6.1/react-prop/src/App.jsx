import { memo, useState } from "react";

function App() {
  const [title, setTitle] = useState("My name is Ronit");

  function updateTitle(){
    setTitle("My name is Ronit " + Math.floor(Math.random() * 5));
  }
  return (
    <div>
    <button onClick={updateTitle}>Change title</button>
      <Headers title={title}/>
      <Headers title="khajuria" />
      <Headers title="khajuria" />
      <Headers title="khajuria" />
      <Headers title="khajuria" />
      <Headers title="khajuria" />
      <Headers title="khajuria" />
      <Headers title="khajuria" />
      <Headers title="khajuria" />
    </div>
  )
}

// function HeaderWithbutton() {
//   const [title, setTitle] = useState("My name is Ronit");

//   function updateTitle() {
//       setTitle("My name is " + Math.floor(Math.random() * 5));
//   }

//   return (
//       <>
//           <button onClick={updateTitle}>Change title</button>
//           <Headers title={title}/>
//       </>
//   )
// }

const Headers = memo(function({ title }) {
  return (
      <>
          <header>{title}</header>
      </>
  )
});

export default App
