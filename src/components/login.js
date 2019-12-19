import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function Login(props) {
  return (
    <div className="loginPage">
      {props.isLoggedOut ?

        <form onSubmit={props.onSubmit} className="loginForm">
          <p>Welcome to MyFitnessTracker! Enter username and password to continue. </p>
          <h3 style={{ 'color': 'red' }}>{props.loginError}</h3>

          <input type="text" placeholder="Enter Username" name="username" onChange={props.onChange} />
          <input type="password" placeholder="Enter Password" name="password" onChange={props.onChange} />
          <Link to="/home" className="button" onClick={props.onSubmit} >Log In</Link>
        </form> :
        <Redirect to="/home" />
      }
    </div >
  )
}

export default Login