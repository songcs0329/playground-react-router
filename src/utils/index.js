import axios from "axios"

export const fetcher = url => axios.get(url)

export const asyncFetcher = async url => {
  const { data } = await axios.get(url)
  return data
}
