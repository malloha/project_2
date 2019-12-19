import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/navigation'

function Login(props) {
  return (
    <div>
      {props.isLoggedOut ?

        <form onSubmit={props.onSubmit}>
          <h3 style={{ 'color': 'red' }}>{props.loginError}</h3>
          <input type="email" placeholder="Enter Email" name="email" onChange={props.onChange} />
          <input type="text" placeholder="Enter Username" name="username" onChange={props.onChange} />
          <input type="password" placeholder="Enter Password" name="password" onChange={props.onChange} />
          <Link to="/home" onClick={props.onSubmit} >on click</Link>
        </form> :
        <Navigation />
      }
    </div >
  )
}

export default Login