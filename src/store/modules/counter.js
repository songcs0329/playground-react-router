import { INCREASE_COUNT, DECREASE_COUNT, CHANGE_VALUE } from "constants"

const counterState = {
  number: 0,
  value: "",
}

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREASE_COUNT:
      return {
        ...state,
        number: state.number - 1,
      }
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.value,
      }
    default:
      return state
  }
}

export default counterReducer
