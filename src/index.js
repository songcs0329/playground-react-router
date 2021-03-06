import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import { composeWithDevTools } from "redux-devtools-extension"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootReducer, { rootSaga } from "./store"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Query, QueryClient, QueryClientProvider } from "react-query"
import App from "App"
import Expenses from "routes/Expenses"
import Invoices from "routes/Invoices"
import Invoice from "routes/Invoice"
import Todos from "routes/Todos"
import Todo from "routes/Todo"
import Counter from "routes/Counter"
import Users from "routes/Users"
import User from "routes/User"

const queryClient = new QueryClient()

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice!</p>
                  </main>
                }
              />
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route path="query" element={<Query />} />
            <Route path="todos" element={<Todos />} />
            <Route path="todo/:id" element={<Todo />} />
            <Route path="counter" element={<Counter />} />
            <Route path="users" element={<Users />}>
              <Route path=":userId" element={<User />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
