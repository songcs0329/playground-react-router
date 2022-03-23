import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { todoItemAction } from "../actions/todosAction"

const Todo = () => {
  const params = useParams()
  const { todoItem } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(todoItemAction(`https://jsonplaceholder.typicode.com/todos/${params.id}`))
  }, [dispatch, params.id])

  if (!todoItem) return <div>Loading...</div>
  return (
    <div style={{ padding: "1rem" }}>
      <span>{todoItem.id}</span>&nbsp;
      <span>{todoItem.userId}</span>
      <h3>{todoItem.title}</h3>
    </div>
  )
}

export default Todo
