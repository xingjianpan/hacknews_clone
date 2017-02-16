import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'
import authenticationReducer from './authentication'
import {reducer as formReducer} from 'redux-form'
import authReducer from './auth_reducer'
const rootReducer = combineReducers({
  weather: WeatherReducer,
  authenticated: authenticationReducer,
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
