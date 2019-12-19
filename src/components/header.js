import React from 'react';
import { Link } from 'react-router-dom'



function Header(props) {

  return (
    <div className="header">

      <Link to="/" ><h1><span1>MY</span1><span2>FITNESS</span2><span3>TRACKER</span3></h1></Link>
      {!props.isLoggedOut && <Link to="/" className="logout-button" onClick={props.logoutClick}>LogOut</Link>}





    </div>
  )
}


export default Header;