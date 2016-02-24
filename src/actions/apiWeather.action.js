import Axios from 'axios';
const API_KEY = require('../../config.json').API_KEY; 
const ROOT_URL = require('../../config.json').ROOT_URL + API_KEY;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const URL = `${ROOT_URL}&q=${city},us`;
  const request = Axios.get(URL);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
