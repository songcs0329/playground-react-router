import React from "react"
import { useQuery } from "react-query"
import { Link, Outlet } from "react-router-dom"
import { asyncFetcher } from "utils"

const Users = () => {
  const users = useQuery("users", () => asyncFetcher(`https://jsonplaceholder.typicode.com/users`))
  const { isLoading, isError, data, error } = users

  if (isLoading) return <div>is Loading...</div>
  if (isError) return <div>{error.message}</div>
  return (
    <>
      <ul>
        {data.map(user => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.email}</Link>
            </li>
          )
        })}
      </ul>
      <Outlet />
    </>
  )
}

export default Users
