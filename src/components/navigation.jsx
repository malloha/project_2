import React, { Component } from 'react';
import CalorieIntake from '../services/calorieIntake'
import WaterIntake from '../services/waterIntake'
import TrackWeight from '../services/trackWeight'
import PhysicalActivity from '../services/physicalActivity'

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
        <CalorieIntake />
        <WaterIntake />
        <TrackWeight />
        <PhysicalActivity />
      </div>
    )
  }
}

export default Navigation;