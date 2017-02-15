import axios from 'axios'
import {
  CHANGE_AUTH,
  FETCH_WEATHER
} from './types'
const API_KEY = 'b7723a4ff8ad2d20660a601eb2ab5c07'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json'

// to avoid copy & paste strings in action and reducers

export function authenticate(isLoggedin){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedin
  }
}

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},cn`
  const request = axios.get(url) //return a promise

  // console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request

  }
}
