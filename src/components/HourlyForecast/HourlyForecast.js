import React from 'react';
import WeatherIcons from '../WeatherIcons/WeatherIcons';
import './HourlyForecast';

const hourlyForecast = (props) => {
  
  console.log(props.hourlyForecast);
  

  return(
    <div className="container">
      {
        Array.isArray(props.hourly) && props.hourly.map((item, index) => 
          <div>
            <p key={index}>{item.time}</p>
            <p>{item.temperature}</p>
            <WeatherIcons weather={item.icon}></WeatherIcons>
          </div>
        )
      }
    </div>
  )
}

export default hourlyForecast;