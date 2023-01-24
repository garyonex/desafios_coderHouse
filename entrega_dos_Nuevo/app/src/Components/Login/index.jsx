import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Notification from '../../helpers/Notification/index'
import LoginForm from '../forms/LoginForm'
import { useUser } from '../../hooks/useUser'
import './styles.modules.scss'
import { useLoading } from '../../hooks/useLoading'

const Login = () => {
  const navigate = useNavigate()
  const { user, loginHook } = useUser()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const { loading } = useLoading()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      loginHook({ username, password })
      setUsername('')
      setPassword('')
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (error) {
      setErrorMessage('Error login')
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
    }
    if (errorMessage) {
      return <p>{errorMessage}</p>
    }
    if (user) {
      return <h1>User is logged</h1>
    }
  }

  return (
    <div>
      <h1>LOGIN USER</h1>
      <Notification message={errorMessage} />
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
        buttonLabel={loading ? 'Cargando...' : 'LOGIN'}
      />
    </div>
  )
}

export default Login
