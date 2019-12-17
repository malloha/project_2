import React, { Component } from 'react';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

class WaterIntake extends Component {
  constructor(props) {
    super(props)
    this.state = {
      water: 0,
      target: 0
    }
  }
  addGlasses = (e) => {

    const newValue = this.state.water + 1;
    this.setState({
      water: newValue
    })
  }
  subtractGlasses = (e) => {

    const newValue = this.state.water - 1;
    if (newValue >= 0) {
      this.setState({
        water: newValue
      })
    }
  }
  render() {
    return (
      <div className="water-intake wrapper">
        <h1> Water Intake Log</h1>
        <p className="entry">Number of glasses :{this.state.water}</p>
        <FaPlusCircle
          className="font-awesome-icon"
          onClick={e => {
            e.preventDefault();
            this.addGlasses();
          }}
        />
        <h3>Add glasses of water</h3>
        <FaMinusCircle
          className="font-awesome-icon"
          onClick={e => {
            e.preventDefault();
            this.subtractGlasses();
          }}
        />
      </div >
    )
  }
}


export default WaterIntake;