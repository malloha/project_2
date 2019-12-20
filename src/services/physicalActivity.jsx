import React, { Component } from 'react';
import Confetti from 'react-confetti'
class PhyscialActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSteps: 0,
      steps: 0,
      activities: [],
      activityLogged: false,
      activity: {
        steps: 0,
        totalSteps: 0,
      },
      goalLogged: false,
      goal: 1000,
      goalAchieved: false
    }
  }
  handleChange = (e) => {
    // const name = e.target.name
    const value = e.target.value
    console.log(this.state.activity.totalSteps)

    this.setState(prevState => ({
      activity: {

        steps: value
      },

    }))
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


  handleSubmit = (e) => {
    e.preventDefault();
    const act = this.state.activity;
    const newTotalSteps = parseInt(act.steps, 10) + parseInt(this.state.totalSteps, 10)
    console.log(act)
    this.setState(prevState => ({
      activities: [...prevState.activities, act],
      activityLogged: true,
      totalSteps: newTotalSteps,

    }))


  }

  render() {
    return (
      <div className="physical-activity wrapper">

        <h2> Physical Activity Tracker</h2>
        {this.state.goal <= this.state.totalSteps ? <h2>Congratulations! Today's Goal Achieved!</h2> : console.log()}
        <div className="steps">
          <div>

            <span1><h3>#StepsGoals</h3></span1>
            {!this.state.goalLogged &&
              <div className="steps">
                <input type="number" name="goal" onChange={this.handlegoal} placeholder="Enter Steps Goal" ></input>
                <button className="button" onClick={this.submitGoal}> Set Goals</button>
              </div>
            }
            {this.state.goalLogged && <span2><p>Today's Goal : {this.state.goal} steps</p></span2>}
          </div>
          <form onSubmit={this.handleSubmit} className="form">
            <input type="number" name="steps" onChange={this.handleChange} placeholder="Enter Daily Steps" />
            <input type="submit" value="Add Physical Activity" className="button" />
            {this.state.activityLogged &&

              this.state.activities.map((activity, key) =>

                <div className="entry" key={key}>
                  <p>Steps: <span>{activity.steps}</span></p>
                  <p>Distance Walked: <span>{activity.steps / 2000} miles</span></p>
                </div>)
            }
            {this.state.activityLogged &&
              < p > Total Steps: {this.state.totalSteps}</p>
            }
            {this.state.goal <= this.state.totalSteps ?

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

          </form>
        </div>

      </div >

    )
  }
}

export default PhyscialActivity;