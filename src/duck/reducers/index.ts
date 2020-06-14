import { combineReducers } from 'redux';
import config from './config';
import items from './items';

export default combineReducers({
  config,
  items,
});
