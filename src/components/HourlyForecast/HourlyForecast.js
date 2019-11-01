import React from 'react';
import WeatherIcons from '../WeatherIcons/WeatherIcons';
import './HourlyForecast';

const hourlyForecast = (props) => {
  
  console.log(props.hourlyForecast);

  return(
    <div className="container">
      {
        Array.isArray(props.hourly) && props.hourly.map((item, index) => 
          <div key={`hour-${index}`} className='hour'>
            <WeatherIcons weather={item.icon}></WeatherIcons>
            <p>{new Date(item.time * 1000).toLocaleTimeString("en-US", { timeZone: props.timezone, hour12: false } )}</p>
            <p>{item.temperature}</p>
          </div>
        )
      }
    </div>
  )
}

export default hourlyForecast;