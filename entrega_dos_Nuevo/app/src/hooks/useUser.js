import { useState, useEffect } from 'react'
import { setToken } from '../services/products/controlleProductos'
import { logoutUser, registerUser } from '../services/users/controllersUser'
import { loginUser } from '../services/users/controllersUser'

export const useUser = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(user.token)
    }
  }, [])

  const logout = () => {
    logoutUser(user.username)
    setUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedAppUser')
  }

  const loginHook = async ({ username, password }) => {
    const user = await loginUser({
      username,
      password,
    })
    window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
    setUser(user)
    setToken(user.token)
  }

  const registerHook = async ({ username, password, email }) => {
    const newUser = await registerUser({
      username,
      password,
      email,
    })
    setUser(newUser)
    setToken(newUser.token)
  }
  return { user, logout, loginHook, registerHook }
}
