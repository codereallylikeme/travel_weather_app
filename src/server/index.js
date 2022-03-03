const result = require('dotenv').config();
if (result.error) {
  throw result.error;
}

//console.log(result.parsed)
//console.log(process.env);
const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const Promise = require('es6-promise').Promise;
const bodyParser = require('body-parser');

const port = process.env.PORT || 8081;

const WEATHER_A_BIT_API_KEY = process.env.WEATHER_A_BIT_API_KEY;
const USER_Name = process.env.USER_Name;
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

const app = express();
app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.get('/test', async (req, res) => {
  res.json({ message: 'pass!' });
});

const geoUrl = 'http://api.geonames.org/searchJSON?q';
const weatherUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixabayUrl = 'https://pixabay.com/api/?';

const getLocation = async (location) => {
  try {
    const resData = await axios.get(
      `${geoUrl}=${location}&maxRows=1&username=${USER_Name}`,
    );
    const { name, countryName, lat, lng } = resData.data.geonames[0];

    const [getWeather, getPix] = await Promise.all([
      axios.get(
        `${weatherUrl}&lat=${lat}&lon=${lng}&key=${WEATHER_A_BIT_API_KEY}`,
      ),
      axios.get(
        `${pixabayUrl}key=${PIXABAY_API_KEY}&q=${countryName}&image_type=photo&category=travel`,
      ),
    ]);

    const dataPic =
      getPix.data.hits[Math.floor(Math.random() * getPix.data.hits.length)]
        .webformatURL;

    let destination =
      name === countryName ? countryName : `${name}, ${countryName}`;
    console.log(destination);

    const takeTrip = {
      location: destination,
      weather: getWeather.data.data,
      pix: dataPic,
    };
    console.log(takeTrip);

    return takeTrip;
  } catch (err) {
    console.log('error', err);
  }
};
getLocation();

app.post('/getTrip', async (req, res) => {
  try {
    const location = encodeURIComponent(req.body.location);
    const data = await getLocation(location);
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log('error', err);
  }
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});

module.exports = app;
