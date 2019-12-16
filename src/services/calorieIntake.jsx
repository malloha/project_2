import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios'


class CalorieIntake extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: 'apple',
      totalCalories: 0,
      apiDataLoaded: false
    }
  }
  handleSubmit = (input) => {
    const apiId = 'cde6e503';
    const apiKey = '421c36bf7f9a6ce7235b6b6ece24a887'
    // const input: 'apple'
    axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${input}&app_id=${apiId}&app_key=${apiKey}`)
      .then((resp) => {
        console.log(resp)
        this.setState({
          totalCalories: resp.data.parsed[0].food.nutrients.ENERC_KCAL,
          apiDataLoaded: true,
        })
      })
      .catch((err) => console.log(err))
  }

  //resp.data.parsed[0].food.nutrients.ENerC_KCAL
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Calorie Intake</h1>
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
              name="search"
              onChange={this.handleChange}
              placeholder="Search"
            ></input>

            <FaSearch
              onClick={async e => {
                e.preventDefault();
                await this.handleSubmit(this.state.input);
              }}
            />
          </form>
          {this.state.apiDataLoaded && <div>Calories in {this.state.input} : {this.state.totalCalories}</div>}
        </div>
      </div >
    )
  }
}
export default CalorieIntake;