import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios'


class CalorieIntake extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      totalCalories: 0,
      apiDataLoaded: false,
      foods: []
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
  render() {
    return (
      <div className="calorie-intake wrapper">
        <h1>Calorie Intake Log</h1>
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
      </div >
    )
  }
}
export default CalorieIntake;