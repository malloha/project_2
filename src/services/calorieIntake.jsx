import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import Confetti from 'react-confetti'


class CalorieIntake extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      totalCalories: 0,
      apiDataLoaded: false,
      foods: [],
      goal: 1000,
      goalLogged: false

    }
  }
  handleSubmit = (input) => {
    const apiId = 'cde6e503';
    const apiKey = '421c36bf7f9a6ce7235b6b6ece24a887'
    // const input: 'apple'
    axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${input}&app_id=${apiId}&app_key=${apiKey}`)
      .then((resp) => {
        console.log(resp)
        if (resp.data.parsed.length > 0) {
          const foodConsumed = {
            calories: resp.data.parsed[0].food.nutrients.ENERC_KCAL,
            foodEaten: input
          }
          const updatedTotalCalories = this.state.totalCalories + foodConsumed.calories
          this.setState(prevState => ({
            totalCalories: updatedTotalCalories,
            apiDataLoaded: true,
            foods: [...prevState.foods, foodConsumed]
          }))
        }
        else {
          console.log('error')
        }

      })

      .catch((err) => console.log(err))
  }


  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
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
      <div className="calorie-intake wrapper">
        <h1>Calorie Intake Log</h1>
        {this.state.goal <= this.state.totalCalories ? <h2>Congratulations! Today's Goal Achieved!</h2> : console.log()}

        <div>

          <h2>#CaloriesGoals</h2>

          {!this.state.goalLogged &&
            <div>
              <input type="number" name="goal" onChange={this.handlegoal}></input>
              <button className="button" onClick={this.submitGoal}> Set Goals</button>
            </div>
          }
          {this.state.goalLogged && <p>Today's Goal : {this.state.goal} steps</p>}
        </div>
        <div className="search-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.handleSubmit(this.state.input);
            }}
          >
            <input
              type="text"
              className="search-input"
              name="food"
              onChange={this.handleChange}
              placeholder="Search Food"
            ></input>

            <FaSearch className="FaSearch"
              onClick={async e => {
                e.preventDefault();
                await this.handleSubmit(this.state.input);
              }}
            />
          </form>
          {this.state.apiDataLoaded &&

            <div>
              {this.state.foods.map((food, key) =>
                <div className="entry" key={key}>
                  <p>Food Consumed: <span>{food.foodEaten}</span></p>
                  <p>Calories Consumed:<span> {food.calories} kcal</span></p>

                </div>)}
              <h3>Total Calories Consumed: {this.state.totalCalories} kcal</h3>
            </div>
          }
        </div>
        {this.state.goal <= this.state.totalCalories ?

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
      </div >
    )
  }
}
export default CalorieIntake;