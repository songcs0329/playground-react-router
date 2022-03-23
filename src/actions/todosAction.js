import { FETCH_TODOITEM, FETCH_TODOLIST } from "../constants"

export const todoListAction = (url, limit) => ({ type: FETCH_TODOLIST, url, limit })
export const todoItemAction = url => ({ type: FETCH_TODOITEM, url })
