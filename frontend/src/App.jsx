import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
    <>
      <h3 className="h3-glow">Your To-Do List</h3>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: '50%'}}>
          <Todos todos={todos} />
        </div>
        <div style={{width: '50%'}}>
          <CreateTodo />
        </div>
      </div>
    </>
  )
}

export default App
