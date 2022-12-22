import { useState } from 'react'
import { registerUser } from '../../services/users/controllersUser'
import RegisterForm from '../forms/RegisterForm'
import './styles.modules.scss'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [message, setMessage] = useState()
  const [loading, setLoading] = useState(false)
  const { username, email, password } = inputs
  const handleRegister = async (event) => {
    event.preventDefault()
    if (username !== '' && email !== '' && password !== '') {
      try {
        const newUser = await registerUser({
          username,
          password,
          email
        })
        console.log(newUser)
        setMessage(newUser)
        setInputs({ username: '', email: '', password: '' })
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
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="formRegister">
        <RegisterForm
          username={username}
          email={email}
          password={password}
          handleUsernameChange={onChange}
          handleEmailChange={onChange}
          handlePasswordChange={onChange}
          handleSubmit={handleRegister}
          btn={loading ? 'Cargando ...' : 'Registrarme'}
        />
      </div>
      {message && <div>{message}</div>}
    </>
  )
}

export default Register