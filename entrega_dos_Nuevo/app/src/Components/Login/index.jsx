import { useState } from 'react'
import LoginForm from '../forms/LoginForm'
import './styles.modules.scss'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const { email, password } = inputs
  const handleLogin = async (event) => {
    event.preventDefault()
    if (email !== '' && password !== '') {
      try {
        const newLogin = await loginUser({
          password,
          email
        })
        window.localStorage.setItem('loggedAppUser', JSON.stringify(newLogin))
        console.log(newLogin)
        setToken(newLogin.token)
        setMessage(newLogin)
        setUser(newLogin)
        setInputs({ email: '', password: '' })
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
        <LoginForm
          email={email}
          password={password}
          handleEmailChange={onChange}
          handlePasswordChange={onChange}
          handleSubmit={handleLogin}
        />
        {message && <div>{message}</div>}
      </div>
    </>
  )
}

export default Login
