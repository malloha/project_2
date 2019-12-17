import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="Nav">
        <p> Welcome to MyFitnessTracker</p>
        <div className="links">
          <Link to="/weight">Track Weight</Link>
          <Link to="/water">Track Water</Link>
          <Link to="/activity">Track Physical Activity</Link>
          <Link to="/calorie">Track Calories</Link>
        </div>
      </div>
    )
  }
}

export default Navigation;