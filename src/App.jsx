import React from 'react';
import { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState([]);
  const addTodo = () => {
    if(todo.trim() === '')return;
     setTodolist([...todolist, {id:Date.now(),text:todo,completed: false}])
    setTodo('');
  }

  const toggleComplete= (id) =>{
    setTodolist
    (todolist.flatMap((item)=>
    item.id === id? {...item, completed: !item.completed}:item))
  }

  const deleteTodo = (id) => {
    setTodolist(todolist.filter((item)=> item.id !==id))
  }

  return (
    <div className='app-container'>
      <h1>To-Do-List</h1>     
      <div className="input-container">
        <input type= 'text'
        placeholder='Add a New Task ...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='add-btn' onClick={addTodo}>Add</button>
      </div>
      <ul className='todolist'>
        {todolist.map((item) =>(
          <li key={item.id} onClick={() => toggleComplete(item.id)}
          style={{
            cursor:'pointer',
            textDecoration: item.completed ? 'line-through' : 'none',
            color:item.completed? 'gray' : 'black'
          }}>
            <span>{item.text}</span>
            <button className='delete-btn' onClick={(e)=>{
              e.stopPropagation();
              deleteTodo(item.id);
            }}>Delete</button>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default App