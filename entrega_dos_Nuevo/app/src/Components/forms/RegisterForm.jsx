import './styles.modules.scss'
export default function RegisterForm({ handleSubmit, ...props }) {
  return (
    <div className='register_container'>
      <h3>Registro</h3>
      <form onSubmit={handleSubmit}>
        <div className='inputForm'>
          <div className='left'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              value={props.username}
              name='username'
              placeholder='Username'
              onChange={props.handleUsernameChange}
              required
            />
            <img
              src='https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami14-40-64.png'
              alt='username'
            />
          </div>
          <div className='left'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              value={props.email}
              name='email'
              placeholder='Email'
              onChange={props.handleEmailChange}
              required
            />
            <img
              src='https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami4-33-64.png'
              alt='email'
            />
          </div>
          <div className='left'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              value={props.password}
              name='password'
              placeholder='Password'
              onChange={props.handlePasswordChange}
              required
            />
            <img
              src='https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami8-06-64.png'
              alt='password'
            />
          </div>
        </div>
        <button className='btnRegister'>{props.btn}</button>
      </form>
    </div>
  )
}
