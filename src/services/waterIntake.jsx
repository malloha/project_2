import React, { Component } from 'react';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Confetti from 'react-confetti'

class WaterIntake extends Component {
  constructor(props) {
    super(props)
    this.state = {
      water: 0,
      goal: 9,
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
          {this.state.goalLogged && this.state.goal <= this.state.water ? <h2>Congratulations! Today's Goal Achieved!</h2> : console.log()}
          <h2>#WaterIntakeGoals</h2>

          {!this.state.goalLogged &&
            <div>
              <input type="number" name="goal" onChange={this.handlegoal}></input>
              <button className="track-button" onClick={this.submitGoal}> Set Goals</button>
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
          {this.state.goal <= this.state.water ?
            <Confetti
              drawShape={ctx => {
                ctx.beginPath()
                for (let i = 0; i < 22; i++) {
                  const angle = 0.35 * i
                  const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                  const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                  ctx.lineTo(x, y)
                }
                ctx.stroke()
                ctx.closePath()
              }}
            />
            : console.log('hi')
          }

        </div>

      </div >
    )
  }
}


export default WaterIntake;