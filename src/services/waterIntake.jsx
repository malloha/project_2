import React, { Component } from 'react';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

class WaterIntake extends Component {
  constructor(props) {
    super(props)
    this.state = {
      water: 0,
      goal: 0,
      goalLogged: false
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
  handlegoal = (e) => {

    this.setState({
      goal: e.target.value
    })

  }
  submitGoal = (e) => {
    this.setState({

      goalLogged: true

    })
  }

  render() {
    return (
      <div className="water-intake wrapper">
        <h1> Water Intake Log</h1>

        <div>

          <h2>#WaterIntakeGoals</h2>

          {!this.state.goalLogged &&
            <div>
              <input type="number" name="goal" onChange={this.handlegoal}></input>
              <button className="button" onClick={this.submitGoal}> Set Goals</button>
            </div>
          }
          {this.state.goalLogged && <p>Today's Goal : {this.state.goal} glasses of water</p>}
        </div>

        <div>
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
        </div>
      </div >
    )
  }
}


export default WaterIntake;