import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'
import authenticationReducer from './authentication'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  weather: WeatherReducer,
  authenticated: authenticationReducer,
  form: formReducer
});

export default rootReducer;
