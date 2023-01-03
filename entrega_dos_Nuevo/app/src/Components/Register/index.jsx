import { useState } from 'react'
import { registerUser } from '../../services/users/controllersUser'
import RegisterForm from '../forms/RegisterForm'
import Login from '../Login'
import './styles.modules.scss'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const { username, email, password } = inputs
  const handleRegister = async (event) => {
    event.preventDefault()
    if (username !== '' && email !== '' && password !== '') {
      try {
        const newUser = await registerUser({
          username,
          password,
          email,
        })
        setUser(newUser)
        setInputs({ username: '', email: '', password: '' })
        setTimeout(() => {
          setLoading(true)
        }, 3000)
      } catch (error) {
        console.log(error)
        setUser('Hubo un error')
        setTimeout(() => {
          setUser('')
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
      {user ? (
        <Login />
      ) : (
        <div className='formRegister'>
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
      )}
    </>
  )
}

export default Register
