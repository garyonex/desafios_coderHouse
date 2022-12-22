import axios from 'axios'

const baseUrl = 'http://localhost:8080'

export const loginUser = async (credentias) => {
  const { data } = await axios.post(`${baseUrl}/login`, credentias)
  return data
}

export const registerUser = (newObject) => {
  const request = axios.post(`${baseUrl}/api/register`, newObject)
  return request.then((res) => res.data)
}
