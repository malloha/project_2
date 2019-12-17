import React from 'react'

function Login(props) {
  return (
    <div>
      <h3 style={{ 'color': 'red' }}>{props.loginError}</h3>
      <form onSubmit={props.onSubmit}>
        <input type="email" placeholder="email" name="email" onChange={props.onChange} />
        <input type="text" placeholder="username" name="username" onChange={props.onChange} />
        <input type="password" placeholder="password" name="password" onChange={props.onChange} />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login