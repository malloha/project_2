import React, { Component } from 'react';

class TrackWeight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weightHistory: [],
      weightArray: [],
      weightLogged: false
    }

  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState(prevState => ({
      weightHistory: {
        ...prevState.weightHistory,
        [name]: value
      },

    }))

    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const w = this.state.weightHistory;

    this.setState(prevState => ({
      weightArray: [...prevState.weightArray, w],
      weightLogged: true

    }))

    console.log(this.state.weightArray)
  }


  render() {
    return (
      <div className="track-weight-wrapper wrapper">
        <h1>Weight</h1>
        <p>Log weight</p>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="weight" onChange={this.handleChange} placeholder="Log Your weight" />
          <input type="date" name="date" onChange={this.handleChange} placeholder="Date" />
          <input type="submit" value="Log weight" />
        </form>
        {this.state.weightLogged &&
          this.state.weightArray.map((entry, key) =>
            <div key={key}>
              <p>Weight: {entry.weight}</p>
              <p>Date: {entry.date}</p>
            </div>)
        }
      </div >
    )

  }
}

export default TrackWeight;