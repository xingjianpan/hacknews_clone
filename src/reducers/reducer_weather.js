import {FETCH_WATHER} from '../actions/index'

export default function (state=[], action) {
  // console.log('Action recieved', action)

  switch (action.type){
    case FETCH_WATHER:
      return [...state, action.payload.data]
  }
  return state
}
