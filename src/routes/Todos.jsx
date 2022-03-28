import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { todoListAction } from "actions/todosAction"

function Todos() {
  const { todoList } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(todoListAction(`https://jsonplaceholder.typicode.com/todos`, 10))
  }, [dispatch])

  if (!todoList) return <div>Loading...</div>
  return (
    <ol style={{ listStyle: "none" }}>
      {todoList.map(todo => {
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
