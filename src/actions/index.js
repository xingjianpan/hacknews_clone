import axios from 'axios'
import {browserHistory} from 'react-router'

import {
  FETCH_WEATHER,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_USERS
} from './types'

const API_KEY = 'b7723a4ff8ad2d20660a601eb2ab5c07'
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const ROOT_URL = 'http://localhost:3090'

export function fetchUsers(){
  const request = axios.get('https://jsonplaceholder.typicode.com/users')

  return {
    type: FETCH_USERS,
    payload: request
  }
}

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

export function fetchMessage() {
  return function(dispatch){
    axios.get(ROOT_URL, {
      // incldue token to make a authenticated request
      headers: {authorization:localStorage.getItem('token')}
    })
      .then(response => {
        // console.log(response)
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}


// redux-promise example for the same fetchMessage
export function fetchMessage_redux_promise(){
  const request = axios.get(ROOT_URL, {
      headers: {authorization:localStorage.getItem('token')}
  })

  return {
    type: FETCH_MESSAGE,
    payload: request
  }
}
