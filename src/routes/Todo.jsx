import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { todoItemAction } from "../actions/todosAction"

const Todo = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { todoItem } = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    dispatch(todoItemAction(`https://jsonplaceholder.typicode.com/todos/${params.id}`))
  }, [dispatch, params.id])

  if (!todoItem) return <div>Loading...</div>
  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={goBack}>back</button>
      <hr />
      <span>{todoItem.id}</span>&nbsp;
      <span>{todoItem.userId}</span>
      <h3>{todoItem.title}</h3>
    </div>
  )
}

export default Todo
