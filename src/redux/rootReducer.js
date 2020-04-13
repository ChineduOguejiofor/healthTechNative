import { combineReducers } from 'redux';
import mapReducer from './mapItems/reducer';

export default combineReducers({
  mapItems: mapReducer,
});
