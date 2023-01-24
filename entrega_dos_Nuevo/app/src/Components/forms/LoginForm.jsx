import styles from './styles.modules.scss?inline'
export default function LoginForm({ handleSubmit, buttonLabel, handlePasswordChange, handleUsernameChange, username, password }) {
  return (
    <div className='loginForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={username}
            name='username'
            placeholder='Username'
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='password'
            placeholder='Password'
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button>{buttonLabel}</button>
      </form>
    </div>
  )
}
