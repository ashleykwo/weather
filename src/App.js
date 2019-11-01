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
      dailyForecast: {},
      timeZone: ""
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
        console.log(res.data.timezone);
        console.log(res.data.currently)
        const newState = {...this.state};
        newState.currentWeather = res.data.currently;
        newState.hourlyForecast = res.data.hourly.data.slice(0, 5).map((item) => ({
          time: item.time,
          rainProbability: Math.round(item.precipProbability * 100),
          temperature: Math.round(item.temperature),
          icon: item.icon
        }));
        newState.dailyForecast = res.data.daily;
        newState.timeZone = res.data.timezone;
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
        <HourlyForecast timezone={ this.state.timeZone } hourly={ this.state.hourlyForecast }></HourlyForecast>
        <img src="https://darksky.net/dev/img/attribution/poweredby.png" alt="Powered by Dark Sky" />
      </div>
    );
  }
  
}

export default App;