import axios from 'axios'
import {browserHistory} from 'react-router'

import {
  FETCH_WEATHER,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types'




const API_KEY = 'b7723a4ff8ad2d20660a601eb2ab5c07'

const ROOT_URL = 'http://localhost:3090'
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},cn`
  const request = axios.get(url) //return a promise

  // console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request

  }
}

export function signupUser({email, password}) {

  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response=> {
          // if request is good
          // - update state to indicate user is authenticated
          dispatch({type: AUTH_USER})
          // - save the JWT token, use localstorage
          localStorage.setItem('token', response.data.token)
          // - redirect to the route /feature
          browserHistory.push('/resources')
      })
        .catch(error => {
            //NOTE here need to use error.response
            dispatch(authError(error.response.data.error))
          }
          // if request is bad
          // - Show an error to the user

        )


  }
}


export function signinUser({email,password}) {

  // use 'redux-thunk' to return an function
  // instead an object
  return function(dispatch){

    // submit email/password to server
      axios.post(`${ROOT_URL}/signin`, {email, password}) // {email:email, password:password}
        .then(response=> {
            // if request is good
            // - update state to indicate user is authenticated
            dispatch({type: AUTH_USER})
            // - save the JWT token, use localstorage
            localStorage.setItem('token', response.data.token)
            // - redirect to the route /feature
            browserHistory.push('/resources')
        })
        .catch(() => {
          // if request is bad
          // - Show an error to the user
          dispatch(authError('Bad Login Info'))

        })



  }

}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}


export function signoutUser() {

  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER,

  }
}
