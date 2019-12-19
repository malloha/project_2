import React from 'react';
import { FaWeight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { GiFruitBowl } from "react-icons/gi";
import { GiWaterBottle } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";


function Navigation(props) {

  return (
    <div className="Nav">
      <h1> Welcome to MyFitnessTracker<span3> {props.username}</span3></h1>
      <div className="links">
        <Link to="/weight" className="track-weight"><FaWeight className="icon" />Track Weight</Link>
        <Link to="/water" className="water-intake"><GiWaterBottle className=" icon" />Track Water Intake</Link>
        <Link to="/activity" className="physical-activity"><FaRunning className=" icon" />Track Physical Activity</Link>
        <Link to="/calorie" className="calorie-intake"><GiFruitBowl className=" icon" />Track Calorie Intake</Link>
      </div>
    </div>
  )
}


export default Navigation;