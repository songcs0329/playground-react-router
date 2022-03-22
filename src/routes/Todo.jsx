import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetcher } from "../utils"

const Todo = () => {
  const params = useParams()
  const [todo, setTodo] = useState({})
  const fetchTodo = useCallback(async () => {
    const res = await fetcher(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    setTodo(res)
  }, [params.id])

  useEffect(() => {
    fetchTodo()
  }, [fetchTodo])

  return (
    <div style={{ padding: "1rem" }}>
      <span>{todo.id}</span>&nbsp;
      <span>{todo.userId}</span>
      <h3>{todo.title}</h3>
    </div>
  )
}

export default Todo
