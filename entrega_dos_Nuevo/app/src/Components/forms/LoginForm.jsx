import styles from './styles.modules.scss?inline'
export default function LoginForm({ handleSubmit, ...props }) {
  return (
    <div className={styles.loginform}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={props.username}
            name='username'
            placeholder='Username'
            onChange={props.handleUsernameChange}
          />
        </div>
        <div>
          <input
            type='text'
            value={props.password}
            name='password'
            placeholder='Password'
            onChange={props.handlePasswordChange}
          />
        </div>
        <button>LOGIN</button>
      </form>
    </div>
  )
}
