import config from './config';
import items from './items';
import { combineReducers } from 'redux';

export default combineReducers({
  config,
  items,
});
