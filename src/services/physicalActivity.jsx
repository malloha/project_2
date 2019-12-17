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
      <div className="physical-activity-wrapper wrapper">
        <h1> Physical Activity</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="steps" onChange={this.handleChange} placeholder="Enter Steps" />
          <input type="number" name="distance" onChange={this.handleChange} placeholder="Distance Walked" />
          <input type="submit" value="Add Physical Activity" />
        </form>
        {this.state.activityLogged &&
          this.state.activities.map((activity, key) =>
            <div key={key}>
              <p>Steps: {activity.steps}</p>
              <p>Distance Walked: {activity.distance}</p>
            </div>)
        }
      </div>
    )
  }
}

export default PhyscialActivity;