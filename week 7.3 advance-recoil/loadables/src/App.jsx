
import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

   {
    // when useRecoilStateLoadable is used it gives two things
    // State 
    // contents
    // then the syntax changes a bit like
    // then you dont set the state like simple todo you have some more methods then like .contents -> defines the result , .state
    // and .state -> loading/hasState/hasErros .
    // loading, hasState and hasErrors can be used for error handeling
   }
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   else if(todo.state === "hasError"){
    return <div>
      Error while fetching data from backend
    </div>
   }
   // Otherwise we caN SIMPLY USE the <Suspense> librabry to show somhething different till the data is not being fetched yet
   
   
   return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}

export default App
