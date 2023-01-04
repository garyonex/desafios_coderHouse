import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Notification from '../../helpers/Notification'
import { useLoading } from '../../hooks/useLoading'
import { useUser } from '../../hooks/useUser'
import RegisterForm from '../forms/RegisterForm'
import './styles.modules.scss'


const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState()
  const { registerHook } = useUser()
  const { loading } = useLoading()
  const { username, email, password } = inputs
  const handleRegister = async (event) => {
    event.preventDefault()
    if (username !== '' && email !== '' && password !== '') {
      try {
        registerHook({ username, email, password })
        setInputs({ username: '', email: '', password: '' })
        setTimeout(() => {
          navigate('/')
        }, 3000)
      } catch (error) {
        console.log(error)
        setErrorMessage('Error register')
        setTimeout(() => {
          setErrorMessage(null)
        }, 1500)
      }
    }
  }
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='formRegister'>
        <Notification errorMessage={errorMessage} />
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
    </>
  )
}

export default Register
