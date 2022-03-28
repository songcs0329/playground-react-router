import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { asyncFetcher } from "utils"

const User = () => {
  const params = useParams()
  const { isLoading, isError, data, error } = useQuery(`user${params.userId}`, () =>
    asyncFetcher(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
  )

  if (isLoading) return <div>is Loading...</div>
  if (isError) return <div>{error.message}</div>
  return (
    <div style={{ padding: "1rem", backgroundColor: "orange" }}>
      <strong>{data.email}</strong>
      <p>{data.name}</p>
      <p>{data.username}</p>
      <p>{data.phone}</p>
      <p>{data.address.city}</p>
    </div>
  )
}

export default User
