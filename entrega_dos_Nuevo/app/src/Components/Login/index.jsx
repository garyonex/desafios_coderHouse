import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Notification from '../../helpers/Notification/index'
import LoginForm from '../forms/LoginForm'
import { useUser } from '../../hooks/useUser'
import './styles.modules.scss'

const Login = () => {
  const navigate = useNavigate()
  const { user, loginHook } = useUser()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const [loading, setLoading] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      loginHook({ username, password })
      setUser('')
      setPassword('')
      navigate('/products')
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
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h1>LOGIN USER</h1>
      <Notification errorMessage={errorMessage} />
      <LoginForm
        username={username}
        password={password}
        handleEmailChange={onChange}
        handlePasswordChange={onChange}
        handleSubmit={handleLogin}
      />
    </div>
  )
}

export default Login
