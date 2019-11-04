import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import SearchBar from './components/SearchBar/SearchBar';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';
import DailyForecast from './components/DailyForecast/DailyForecast';
import Footer from './components/Footer/Footer';

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
        const newState = {...this.state};
        newState.currentWeather = res.data.currently;
        newState.hourlyForecast = res.data.hourly.data.slice(0, 5).map((item) => ({
          time: item.time,
          temperature: Math.round(item.temperature),
          icon: item.icon
        }));        
        newState.dailyForecast = res.data.daily.data.slice(1, 6).map((item) => ({
          time: item.time,
          apparentHigh: Math.round(item.apparentTemperatureHigh),
          apparentLow: Math.round(item.apparentTemperatureLow),
          icon: item.icon
        }));
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
        <SearchBar></SearchBar>
        <CurrentWeather location={ this.state.location } currently={ this.state.currentWeather }></CurrentWeather>
        <HourlyForecast hourly={ this.state.hourlyForecast }></HourlyForecast>
        <DailyForecast daily={ this.state.dailyForecast }></DailyForecast>
        <Footer></Footer>
      </div>
    );
  }
  
}

export default App;