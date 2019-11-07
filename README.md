# React Weather App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

### Installation
1. Clone repository and install dependencies
```
$ git clone https://github.com/ashleykwo/weather.git
$ cd weather
$ npm install
```

2. Get API keys from [Dark Sky](https://darksky.net/dev) and [Google](https://console.developers.google.com/)

3. Change name of `.env.example` file to `.env` and replace `YOUR_DARKSKY_API_KEY` and `YOUR_GOOGLE_API_KEY_HERE` with your own API keys:
```
REACT_APP_DARKSKY_API_KEY = YOUR_DARKSKY_API_KEY
REACT_APP_GOOGLE_API_KEY = YOUR_GOOGLE_API_KEY
```

### Available Scripts

### `npm start`

Runs the app in the development mode on [http://localhost:3000](http://localhost:3000).

### `npm run server`

Runs local server with nodemon on [http://localhost:4000](http://localhost:4000).

### `npm run dev`

Runs react app on [http://localhost:3000](http://localhost:3000) and server on [http://localhost:4000](http://localhost:4000) concurrently.

### Built With
* React
* Express

### APIs

* [Dark Sky](https://darksky.net/forecast/40.7127,-74.0059/us12/en)
* [IP Address Location API (IPAPI)](https://ipapi.co/)