import React from 'react';

import WeatherIcons from '../WeatherIcons/WeatherIcons';

const dailyForecast = (props) => {
  return(
    <div className="daily">
      {
        Array.isArray(props.daily) && props.daily.map((item, index) => 
          <div key={`hour-${index}`} className="container">
            <p>{new Date(item.time * 1000).toLocaleString("en-US", { weekday: 'long' })}</p>
            <WeatherIcons weather={item.icon}></WeatherIcons>
            <p>{item.apparentHigh}&#176; / {item.apparentLow}&#176;</p>
          </div>
        )
      }
    </div>
  )
}

export default dailyForecast;