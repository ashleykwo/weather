import React from 'react';
import WeatherIcons from '../WeatherIcons/WeatherIcons';
import './CurrentWeather.css';

const currentWeather = (props) => {
  const { location } = props; // props.location
  const { currently } = props; // props.weather
  
  const date = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dayOfWeek = days[date.getDay()];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const time = `${(date.getHours() > 12) ? (date.getHours() - 12) : (date.getHours())}:${(date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()} ${(date.getHours() >= 12) ? 'PM' : 'AM'}`;
  return (
    <div className="container">
      <p>{ location.city }, { location.region_code } { location.postal }</p>
      <p>{ dayOfWeek }</p>
      <p>{ month } { day }</p>
      <p>{ time }</p>
      <WeatherIcons weather={ currently.icon }></WeatherIcons>
    </div>
  )
}

export default currentWeather;