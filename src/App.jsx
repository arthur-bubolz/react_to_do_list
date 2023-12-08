import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Estudar para Prova",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Fazer Trabalho de Si2",
      category: "Trabalho",
      isCompleted: false,
    }
  ])

  const [search,setSearch] = useState("");

  const [filter,setFilter] = useState("All");
  const [sort,setSort] = useState("asd");

  const addTodo = (text,category) => {
    const newTodo = [...todos,{
      id: Math.floor(Math.random() * (999999999)),
      text,
      category,
      isCompleted: false,
    }]

    setTodos(newTodo);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
      todo.id != id ? todo : null
    );

    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : null
    );

    console.log(newTodos);
    setTodos(newTodos);
  }

  return (
    <>
      <div className='app'>
        <h1>Lista de Tarefas!</h1>
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
        <div className='todo-list'>
          {todos
          .filter((todo) => filter === "All" 
            ? true 
            : filter === "Completed" 
            ? todo.isCompleted 
            : !todo.isCompleted)
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a,b) => sort === "asc" 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text))
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>
      </div>
    </>
  )
}

export default App
