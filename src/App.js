import React, { Component } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Login from './components/login'
import { Route, withRouter } from 'react-router-dom'
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
      isLoggedOut: true,
      user: {
        username: 'maleeha',
        password: '123',
        email: 'm@m.com'
      }
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    const username = this.state.username
    const email = this.state.email;
    const password = this.state.password;
    if (password === this.state.user.password && username === this.state.user.username && email === this.state.user.email) {
      this.setState({
        user: {
          email: email,
          username: username,
          password: password
        },
        isLoggedOut: false
      })
      console.log('this is the onsubmit', this.state)
      this.props.history.push('/home')
    }
    else {
      this.setState({
        loginError: "Please fillout all fields"
      })
    }
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
      isLoggedOut: true,
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

          <Route
            exact
            path="/home"
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
            exact path="/"
            render={() => (
              <Login onSubmit={this.onSubmit}
                onChange={this.onChange}
                isLoggedOut={this.state.isLoggedOut}
                logoutClick={this.logoutClick}
                loginError={this.state.loginError}
              />
            )}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);