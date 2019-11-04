import React, { Component } from "react";
import { GoogleApiWrapper } from 'google-maps-react';

import './SearchBar.css';

import PartlyCloudyDay from '../../assets/Cloud-Sun.svg';

class SearchBar extends Component {
  render() {
    return (
      <header>
        <img src={PartlyCloudyDay} alt="Sun behind cloud" />
        <h1>Weather App</h1>
        <form>
          <input type="text" name="location" placeholder="Enter Location..." />
        </form>
      </header>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  libraries: ["places"]
})(SearchBar);