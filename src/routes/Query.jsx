import React from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import queryString from "query-string"

function Query() {
  const location = useLocation()
  console.log("location", location)
  const parse = queryString.parse(location.search)
  console.log(parse)

  const [params] = useSearchParams()
  console.log("useSearchParams key: string value: ", params.get("string"))
  console.log("useSearchParams key: idx value: ", params.get("idx"))

  return (
    <div>
      <h3>query string</h3>
    </div>
  )
}

export default Query
