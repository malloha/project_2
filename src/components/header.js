import React from 'react';
import { Link } from 'react-router-dom'
import Login from './login'


function Header(props) {

  return (

    <Link to="/" className="header">MY FITNESS TRACKER</Link>
      // {/* <Link to="/login">Log In</Link>
      // {props.isLoggedIn ?
      //   <button onClick={props.logoutClick}>Logout</button> :
      //   <Login onSubmit={props.onSubmit}
      //     onChange={props.onChange}
      //     loginError={props.loginError} />
      // } */}
  
  )
}


export default Header;