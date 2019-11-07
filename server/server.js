require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin : "http://localhost:4000" }));
app.enable('trust proxy');

app.get('/', (req, res) => {
  res.send('Running...');
});

app.get('/api/weather/:latitude,:longitude', (req, res) => { 
  axios.get(`https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API_KEY}/${req.params.latitude},${req.params.longitude}`)
    .then(response => {
      res.send(response.data)
    })
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));