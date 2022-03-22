import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetcher } from "../utils"

function Todos() {
  const [todos, setTodos] = useState([])
  const fetchTodos = async limit => {
    const res = await fetcher(`https://jsonplaceholder.typicode.com/todos`)
    setTodos(res.slice(0, limit))
  }

  useEffect(() => {
    fetchTodos(10)
  }, [])

  return (
    <ol style={{ listStyle: "none" }}>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <Link
              to={`/todo/${todo.id}`}
              style={{
                display: "block",
                color: todo.completed ? "red" : "",
              }}
            >
              {todo.title}
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default Todos
