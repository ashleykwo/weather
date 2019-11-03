import React from "react";

import './SearchBar.css';

import PartlyCloudyDay from '../../assets/Cloud-Sun.svg';

const searchBar = () => {
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

export default searchBar;