import { combineReducers } from "@reduxjs/toolkit"
import counterReducer from "./modules/counter"

const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer
