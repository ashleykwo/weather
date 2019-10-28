import React from 'react';
import ClearDay from '../../assets/Sun.svg';
import ClearNight from '../../assets/Moon.svg';
import PartlyCloudyDay from '../../assets/Cloud-Sun.svg';
import PartlyCloudyNight from '../../assets/Cloud-Moon.svg';
import Cloudy from '../../assets/Cloud.svg';
import Fog from '../../assets/Cloud-Fog.svg';
import Wind from '../../assets/Wind.svg';
import Rain from '../../assets/Cloud-Rain.svg';
import Sleet from '../../assets/Cloud-Hail-Alt.svg';
import Snow from '../../assets/Cloud-Snow.svg';

const weatherIcons = (props) => {
  let icon = null;
  switch(`${props.currently.icon}`) {
    case "clear-day":
      icon = ClearDay;
      break;
    case "clear-night":
      icon = ClearNight;
      break;
    case "partly-cloudy-day":
      icon = PartlyCloudyDay;
      break;
    case "partly-cloudy-night":
      icon = PartlyCloudyNight;
      break;
    case "cloudy":
      icon = Cloudy;
      break;
    case "fog":
      icon = Fog;
      break;
    case "wind":
      icon = Wind;
      break;
    case "rain":
      icon = Rain;
      break;
    case "sleet":
      icon = Sleet;
      break;
    case "snow":
      icon = Snow;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div>
      <img src={icon} alt={props.currently.summary} />
    </div>
  )
}

export default weatherIcons;