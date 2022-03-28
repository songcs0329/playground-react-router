import { put, call, takeLatest, takeEvery } from "redux-saga/effects"
import { HADNLE_ERROR, FETCH_TODOITEM, FETCH_TODOLIST } from "constants"
import { fetcher } from "utils"

function* fetchTodoList(action) {
  try {
    const { data } = yield call(fetcher, action.url)
    yield put({ type: FETCH_TODOLIST, list: data.slice(0, action.limit) })
  } catch (error) {
    yield put({ type: HADNLE_ERROR, error })
  }
}

function* fetchTodoItem(action) {
  try {
    const { data } = yield call(fetcher, action.url)
    yield put({ type: FETCH_TODOITEM, item: data })
  } catch (error) {
    yield put({ type: HADNLE_ERROR, error })
  }
}

export function* todoSaga() {
  yield takeLatest(FETCH_TODOLIST, fetchTodoList)
  yield takeEvery(FETCH_TODOITEM, fetchTodoItem)
}

const todosState = {
  todoList: [],
  todoItem: {},
  error: null,
}

const todosReducer = (state = todosState, action) => {
  switch (action.type) {
    case FETCH_TODOLIST:
      return {
        ...state,
        todoList: action.list,
      }
    case FETCH_TODOITEM:
      return {
        ...state,
        todoItem: action.item,
      }
    default:
      return state
  }
}

export default todosReducer
