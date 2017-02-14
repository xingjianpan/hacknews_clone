import axios from 'axios'

const API_KEY = 'b7723a4ff8ad2d20660a601eb2ab5c07'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json'

console.log(ROOT_URL)
// to avoid copy & paste strings in action and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},cn`
  const request = axios.get(url) //return a promise

  // console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request

  }
}
