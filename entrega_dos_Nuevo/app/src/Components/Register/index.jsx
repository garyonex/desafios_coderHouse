import { useState } from 'react'
import { registerUser } from '../../services/users/controllersUser'
import RegisterForm from '../forms/RegisterForm'
import  './styles.modules.scss'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [message, setMessage] = useState()
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
        console.log(newUser)
        setMessage(newUser)
        setInputs({ username: '', email: '', password: '' })
      } catch (error) {
        console.log(error)
      }
    }
  }
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }


  return (
    <div className='formRegister'>
    
      <RegisterForm
        username={username}
        email={email}
        password={password}
        handleUsernameChange={onChange}
        handleEmailChange={onChange}
        handlePasswordChange={onChange}
        handleSubmit={handleRegister}
      />
    </div>
  )
}

export default Register
