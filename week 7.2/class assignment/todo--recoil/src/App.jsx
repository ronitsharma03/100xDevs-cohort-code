import { useRecoilState, useRecoilValue } from 'recoil'
import { filteredTodoListSelector } from './store/selector/selector'
import { filterAtom, todoInputAtom, todoListAtom } from './store/atom/atoms';
import  './index.css'

const App = () => {
  const todos = useRecoilValue(filteredTodoListSelector);
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const [todoInput, setTodoInput] = useRecoilState(todoInputAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);

  const addTodo = () => {
    setTodoList([...todoList, { ...todoInput }]);
    setTodoInput({ title: "", description: "" });
  }

  return (
    <div className='main-container'>
        
        <div className='input-div'>
        <h1 className='h1'>Todo List</h1>
          <input required className='placeholder-text title-input' type="text" placeholder='Title' value={todoInput.title} onChange={(e) => {
            setTodoInput({ ...todoInput, title: e.target.value })
          }} /> <br />
          <textarea required className='placeholder-text text-area' rows={10} cols={20} type="text" placeholder='Description' value={todoInput.description} onChange={(e) => {
            setTodoInput({ ...todoInput, description: e.target.value })
          }}></textarea> <br />
          <button type='submit' className='btn' onClick={addTodo}>Add Todo</button>
        </div>
        <br />
        <div className='filter-div'>
          <input className='placeholder-text filter-input'type="text" placeholder='Search' value={filter} onChange={(e) => {
            setFilter(e.target.value)
          }} />
        </div>

        <div className='todo-div'>
          <ul className='list'>
            {
              todos.map((item, index) => 
                <li className='list-item' key={index}>
                  <strong>{item.title}</strong> 
                  {item.description}
                </li>
              )
            }
          </ul>
        </div>
    </div>

  )
}

export default App