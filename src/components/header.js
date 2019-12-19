import React from 'react';
import { Link } from 'react-router-dom'



function Header(props) {

  return (
    <div className="header">

      <Link to="/" ><h1>MY FITNESS TRACKER</h1></Link>
      {!props.isLoggedOut && <Link to="/" className="logout-button" onClick={props.logoutClick}>LogOut</Link>}





    </div>
  )
}


export default Header;