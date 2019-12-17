import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Navigation from './components/navigation'
import { Route } from 'react-router-dom'
import WaterIntake from './services/waterIntake'
import TrackWeight from './services/trackWeight'
import CalorieIntake from './services/calorieIntake'
import PhysicalActivity from './services/physicalActivity'



import './App.css';

function App() {
  return (
    <div className="App">


      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
