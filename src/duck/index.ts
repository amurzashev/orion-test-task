import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  const devToolsEnhancer = composeWithDevTools({});
  const store = createStore(rootReducer, {}, devToolsEnhancer(applyMiddleware(thunk)));
  return { store };
};
