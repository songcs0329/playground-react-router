import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeValue, decrease, increase } from "../actions/counterAction"

const Counter = () => {
  const { number, value } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const handleInput = e => dispatch(changeValue(e.target.value))
  const decreaseCount = () => dispatch(decrease())
  const increaseCount = () => dispatch(increase())

  return (
    <div style={{ padding: "1rem" }}>
      <input type="text" value={value} onChange={handleInput} />
      <button onClick={decreaseCount}>-</button>
      <strong>{number}</strong>
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default Counter
