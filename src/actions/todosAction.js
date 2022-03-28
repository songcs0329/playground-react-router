import { FETCH_TODOLIST, FETCH_TODOITEM } from "constants"

export const todoListAction = (url, limit) => ({ type: FETCH_TODOLIST, url, limit })
export const todoItemAction = url => ({ type: FETCH_TODOITEM, url })
