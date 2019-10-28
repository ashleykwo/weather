import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      currentWeather: {},
      hourlyForecast: {},
      dailyForecast: {}
    }
  }
  
  componentDidMount() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const API_KEY = '29b741d85079c9ed7a103d693993129a';
    axios.get('https://ipapi.co/json/')
      .then(res => {
        this.setState({ location : res.data });
        return axios.get(`${proxy}https://api.darksky.net/forecast/${API_KEY}/${res.data.latitude},${res.data.longitude}`)
      })
      .then(res => {
        //console.log(res.data);
        console.log(res.data.hourly.data[0]);
        const newState = {...this.state};
        newState.currentWeather = res.data.currently;
        newState.hourlyForecast = res.data.hourly;
        newState.dailyForecast = res.data.daily;
        this.setState({...newState})
      });

    /* Geolocation API 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude, position.coords.longitude)
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        },
        err => {
          console.warn(`ERROR ${err.code}: ${err.message}`);
        }
      );
    }*/
  }

  render() {
    return (
      <div className="App">
        {/*
        {this.state.location.latitude}<br />
        {this.state.currentWeather.temperature}<br />
        {this.state.currentWeather.temperature}
        */}
        <CurrentWeather location={ this.state.location } currently={ this.state.currentWeather }></CurrentWeather>
        <HourlyForecast hourly={ this.state.hourlyForecast }></HourlyForecast>
      </div>
    );
  }
  
}

export default App;