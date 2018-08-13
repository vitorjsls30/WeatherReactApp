import { combineReducers } from 'redux';
import WeatherReducer from './reducer_wheater';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
