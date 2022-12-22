import './styles.modules.scss'
export default function RegisterForm({ handleSubmit, btn, ...props }) {
  return (
    <div>
      <h1>Bienvenido</h1>
      <h3>Registro</h3>
      <form onSubmit={handleSubmit}>
        <div className='inputForm'>
          <div className='left'>
            <label htmlFor="username">Username</label>
            <input
              type='text'
              value={props.username}
              name='username'
              placeholder='Username'
              onChange={props.handleUsernameChange}
            />
            <img
              src='https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami14-40-64.png'
              alt='username'
            />
          </div>
          <div className='left'>
          <label htmlFor="email">Email</label>
            <input
              type='text'
              value={props.email}
              name='email'
              placeholder='Email'
              onChange={props.handleEmailChange}
            />
            <img
              src='https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami4-33-64.png'
              alt='email'
            />
          </div>
          <div className='left'>
          <label htmlFor="password">Password</label>
            <input
              type='password'
              value={props.password}
              name='password'
              placeholder='Password'
              onChange={props.handlePasswordChange}
            />
            <img
              src='https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami8-06-64.png'
              alt='password'
            />
          </div>
          <button
          className='btnRegister'>{btn}</button>
        </div>
      </form>
    </div>
  )
}
