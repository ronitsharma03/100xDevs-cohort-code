import './App.css'

function App() {

  return (
    <>
      <Todo title='Gym' description='Go to Gym at 6PM' done={true} />
    </>
  )
}


interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp){
  const { done } = props;
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      {
        done ? <div>✅</div>:<div>❎</div>
      }
    </div>
  )
}

export default App
