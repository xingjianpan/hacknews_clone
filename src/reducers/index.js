import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'
import authenticationReducer from './authentication'


const rootReducer = combineReducers({
  weather: WeatherReducer,
  authenticated: authenticationReducer
});

export default rootReducer;
