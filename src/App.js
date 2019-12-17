import React, { Component } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Login from './components/login'
import { Link, Route } from 'react-router-dom'
import WaterIntake from './services/waterIntake'
import TrackWeight from './services/trackWeight'
import CalorieIntake from './services/calorieIntake'
import PhysicalActivity from './services/physicalActivity'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      username: '',
      password: '',
      email: '',
      isLoggedIn: false

    }
  }



  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      password: this.state.password,
      username: this.state.username,
      email: this.state.email,
      isLoggedIn: true
    })
  }


  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  logoutClick = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn: false,
      username: "",
      password: "",
      email: ""
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {/* 
          {this.state.isLoggedIn && <p>Welcome {this.state.username}! How was your Day? </p>} */}

          <Route
            exact
            path="/"
            render={() => (
              <Navigation
              />
            )}
          />
          <Route
            path="/weight"
            render={() => (
              <TrackWeight />
            )}
          />
          <Route
            path="/water"
            render={() => (
              <WaterIntake />
            )}
          />
          <Route
            path="/activity"
            render={() => (
              <PhysicalActivity />
            )}
          />
          <Route
            path="/calorie"
            render={() => (
              <CalorieIntake />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <Login />
            )}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
