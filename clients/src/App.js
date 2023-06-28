
import './App.css';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import { addTodo, getAllTodo,updateTodo,deleteTodo } from './utils/HandleApi';

function App() {
  const [todo,setTodo] = useState([]);
  const [text,setText] = useState("");
  const [isUpdating,setIsUpdating] = useState(false);
  const [todoId,setTodoId] = useState("");
  useEffect(()=>{
    getAllTodo(setTodo)
  },[])


  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setTodoId(_id)
    setText(text)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo Application</h1>
        <div className="top">
          <input type="text" placeholder="Add todos..." value={text} onChange={(e)=>setText(e.target.value)}/>
          <div className='add'
           onClick={ 
            isUpdating ? ()=>updateTodo(todoId,text,setTodo,setText,setIsUpdating) 
           : ()=>addTodo(text,setText,setTodo) }>
          {
            isUpdating ? "Update" : "ADD"
          }

          </div>
        </div>
        <div className='list'>
          {todo.map((item)=><TodoList key={item._id}
          text={item.text} 
          updateMode = {()=>updateMode(item._id,item.text)}
          deleteTodo = {()=>deleteTodo(item._id,setTodo)}
          />)}
          
        </div>
      </div>
    </div>
  );
}

export default App;
