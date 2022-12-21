import { useState } from 'react'
import RegisterForm from '../forms/RegisterForm'
export const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      const newUserRegister = await registerUser({
        username,
        password,
        email
      })
      setUsername('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }
  const handleChageUsername = (event) => {
    setUsername(event.target.value)
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  return (
    <>
      <RegisterForm
        username={username}
        email={email}
        password={password}
        handleUsernameChange={handleChageUsername}
        handleEmailChange={handleChangeEmail}
        handlePassword={handleChangePassword}
        handleSubmit={handleRegister}
      />
    </>
  )
}
