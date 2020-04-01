import React from 'react';
import { Link } from 'react-router-dom'
// import { MdTrackChanges } from "react-icons/md";





function Header(props) {

  return (
    <div className="header">

      <Link to="/" ><h1><span1>MY</span1><span2>FITNESS</span2><span3>TRACKER</span3></h1></Link>
      {!props.isLoggedOut && <Link to="/" className="logout-button" onClick={props.logoutClick}>LogOut</Link>}
      {!props.isLoggedOut && <Link to="/" className="back-button"  >Back</Link>}





    </div>
  )
}


export default Header;