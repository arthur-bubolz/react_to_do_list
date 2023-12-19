const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
        <div className='todo'>
            <div className='content'
            style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                <p>{todo.text}</p>
                <p>{todo.category}</p>
                <p>{todo.timestamp}</p>
            </div>
            <div className='buttons'>
                <button onClick={() => completeTodo(todo.id)}>🗸</button>
                <button onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
  )
}

export default Todo