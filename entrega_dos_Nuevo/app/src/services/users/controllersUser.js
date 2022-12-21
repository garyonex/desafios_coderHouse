import axios from 'axios'

const baseUrl = 'http://localhost:8080'

export const login = async (credentias) => {
  const { data } = await axios.post(`${baseUrl}/login`, credentias)
  return data
}

export const registerUser = async (data) => {
  const result = await axios.post(`${baseUrl}/api/register`, data)
  return result.then((res) => res.data)
}
