import { useState } from 'react'
import Notification from '../../helpers/Notification/index'
import { loginUser, setToken } from '../../services/users/controllersUser'
import LoginForm from '../forms/LoginForm'
import './styles.modules.scss'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const [message, setMessage] = useState()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const { username, password } = inputs
  const handleLogin = async (event) => {
    event.preventDefault()
    if (username !== '' && password !== '') {
      try {
        const newLogin = await loginUser({
          username,
          password
        })
        window.localStorage.setItem('loggedAppUser', JSON.stringify(newLogin))
        console.log(newLogin)
        setToken(newLogin.token)
        setMessage(newLogin)
        setUser(newLogin)
        setInputs({ username: '', password: '' })
        setTimeout(() => {
          setMessage('')
          //TODO colocar ruta para que redirija a el login
          setLoading(false)
        }, 3000)
      } catch (error) {
        console.log(error)
        setMessage('Hubo un error')
        setTimeout(() => {
          setMessage('')
          setLoading(false)
        }, 1500)
      }
    }
  }
  // TODO --> donde deberia ir el logout?
  const handleLogout = () => {
    setUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedAppUser')
  }
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div>
        <h1>LOGIN USER</h1>
        <Notification message={message}/>
        <LoginForm
          username={username}
          password={password}
          handleEmailChange={onChange}
          handlePasswordChange={onChange}
          handleSubmit={handleLogin}
        />
      </div>
    </>
  )
}

export default Login
