import React, { Component } from 'react';

class PhyscialActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: 0,
      distance: 0,
      activities: [],
      activityLogged: false,
      activity: {}
    }
  }
  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState(prevState => ({
      activity: {
        ...prevState.activity,
        [name]: value
      },
    }))

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const act = this.state.activity;
    console.log(act)
    this.setState(prevState => ({
      activities: [...prevState.activities, act],
      activityLogged: true
    }))

    console.log(this.state.activities)
  }

  render() {
    return (
      <div className="physical-activity wrapper">
        <h1> Physical Activity Tracker</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <input type="number" name="steps" onChange={this.handleChange} placeholder="Enter Steps" />
          {/* <input type="number" name="distance" onChange={this.handleChange} placeholder="Distance Walked" /> */}
          <input type="submit" value="Add Physical Activity" className="button" />
        </form>
        {this.state.activityLogged &&
          this.state.activities.map((activity, key) =>
            <div className="entry" key={key}>
              <p>Steps: <span>{activity.steps}</span></p>
              <p>Distance Walked: <span>{activity.steps / 2000} miles</span></p>
            </div>)
        }
      </div>
    )
  }
}

export default PhyscialActivity;