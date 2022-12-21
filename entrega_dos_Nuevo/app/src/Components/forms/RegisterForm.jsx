export default function RegisterForm({ handleSubmit, ...props }) {
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={props.username}
          name="username"
          placeholder="Username"
          onChange={props.handleUsernameChange}
        />
      </div>
      <div>
        <input
          type="text"
          value={props.email}
          name="email"
          placeholder="Email"
          onChange={props.handleEmailChange}
        />
      </div>
      <div>
        <input
          type="text"
          value={props.password}
          name="password"
          placeholder="Password"
          onChange={props.handlePasswordChange}
        />
      </div>
      <button>REGISTER</button>
    </form>
  )
}
