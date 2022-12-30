import { useState, useEffect } from 'react'
import { setToken } from '../services/products/controlleProductos'
import { registerUser } from '../services/users/controllersUser'
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
    setUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedAppUser')
  }

  const loginHook = async ({ username, password }) => {
    const user = await loginUser({
      username,
      password
    })
    window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
    setUser(user)
    setToken(user.token)
  }

  const registerHook = async ({newObject}) => {
    const newUser = await registerUser({
      newObject
    })
  }
  return { user, logout, loginHook }
}
