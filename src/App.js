import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    }
  }
  
  componentDidMount() {
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    const API_KEY = '29b741d85079c9ed7a103d693993129a';
    axios.get('https://ipapi.co/json/')
      .then(res => {
        this.setState({ location : res.data });
        console.log(res.data);
        return axios.get(`${proxy}https://api.darksky.net/forecast/${API_KEY}/${res.data.latitude},${res.data.longitude}`)
      })
      .then(res => {
        console.log(res.data)
      })

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
      </div>
    );
  }
  
}

export default App;