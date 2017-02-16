import axios from 'axios'
import {browserHistory} from 'react-router'

import {
  CHANGE_AUTH,
  FETCH_WEATHER,
    AUTH_USER,
  UNAUTH_USER
} from './types'




const API_KEY = 'b7723a4ff8ad2d20660a601eb2ab5c07'

const ROOT_URL = 'http://localhost:3090'

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


export function signinUser({email,password}) {

  // use redux-thunk to return an function
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

        })


    // if request is bad
    // - Show an error to the user

  }

}
