import React, { Component } from 'react';
import Confetti from 'react-confetti'

class TrackWeight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weightHistory: [],
      weightArray: [],
      weightLogged: false,
      goal: 10,
      goalLogged: false,
      currentWeight: 1000

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
    // if (e.target.name === "weight") {
    //   this.setState({
    //     currentWeight: e.target.value
    //   })
    // }
    // console.log(this.state)
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
      <div className="track-weight wrapper">
        <h1>Weight Tracker</h1>

        <div>
          {this.state.goalLogged && this.state.weightLogged &&
            this.state.goal >= this.state.weightArray[this.state.weightArray.length - 1].weight ? <h2>Congratulations! You achieved your Goal Weight!</h2> : console.log()}
          <h2>#WeightGoals</h2>

          {!this.state.goalLogged &&
            <div>
              <input type="number" name="goal" onChange={this.handlegoal}></input>
              <button className="track-button" onClick={this.submitGoal}> Set Goals</button>
            </div>
          }
          {this.state.goalLogged && <p>Today's Goal : {this.state.goal} glasses of water</p>}
        </div>



        <p>Log weight in lbs</p>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="weight" onChange={this.handleChange} placeholder="Log Your weight" />
          <input type="date" name="date" onChange={this.handleChange} placeholder="Date" />
          <input type="submit" value="Log weight" className="button" />
        </form>
        {this.state.weightLogged &&
          this.state.weightArray.map((entry, key) =>
            <div className="entry" key={key}>
              <p>Weight: <span>{entry.weight} lbs</span></p>
              <p>Date: <span>{entry.date}</span></p>
            </div>)
        }
        {this.state.goalLogged && this.state.weightLogged &&
          this.state.goal >= this.state.weightArray[this.state.weightArray.length - 1].weight
          ?
          // console.log(this.state.weightArray[this.state.weightArray.length - 1].weight, 'working')
          < Confetti
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

      </div >
    )

  }
}

export default TrackWeight;