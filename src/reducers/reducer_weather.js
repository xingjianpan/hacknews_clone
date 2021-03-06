import {FETCH_WEATHER} from '../actions/types'

export default function (state=[], action) {
  // console.log('Action recieved', action)

  switch (action.type){
    case FETCH_WEATHER:
      return [...state, action.payload.data]
  }
  return state
}
