import { combineReducers } from "@reduxjs/toolkit"
import { all } from "redux-saga/effects"
import { HADNLE_ERROR, TOGGLE_LOADING } from "../constants"
import counterReducer from "./modules/counter"
import todosReducer, { todoSaga } from "./modules/todos"

const commonState = {
  loading: false,
  error: null,
}

const commonReducer = (state = commonState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    case HADNLE_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export function* rootSaga() {
  yield all([todoSaga()])
}

const rootReducer = combineReducers({
  common: commonReducer,
  counter: counterReducer,
  todos: todosReducer,
})

export default rootReducer
