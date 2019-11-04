import React from 'react';

import WeatherIcons from '../WeatherIcons/WeatherIcons';

import './HourlyForecast.css';

const hourlyForecast = (props) => {
  return(
    <div className="container">
      {
        Array.isArray(props.hourly) && props.hourly.map((item, index) => 
          <div key={`hour-${index}`} className="hourly">
            <p className="time">{new Date(item.time * 1000).toLocaleTimeString("en-US", { timeZone: props.timezone, hour: 'numeric', minute:'2-digit', hour12: true } )}</p>
            <div className="icon">
              <WeatherIcons weather={item.icon}></WeatherIcons>
            </div>
            <p className="temp">{item.temperature}&#176;</p>
          </div>
        )
      }
    </div>
  )
}

export default hourlyForecast;