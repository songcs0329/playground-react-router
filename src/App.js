import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>book kepper!</h1>
      <nav
        style={{
          borderBottom: "1px solid",
          paddingBottom: "1rem",
        }}
      >
        <Link to={"/invoices"}>Invoices</Link>&nbsp;|&nbsp;
        <Link to={"/expenses"}>Expenses</Link>&nbsp;|&nbsp;
        <Link to={"/query?string=song&idx=30"}>Query</Link>&nbsp;|&nbsp;
        <Link to={"/todos"}>Todos</Link>&nbsp;|&nbsp;
        <Link to={"/counter"}>Counter</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
