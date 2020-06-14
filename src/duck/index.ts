import { createStore, applyMiddleware, Action } from 'redux';
import rootReducer from './reducers';
import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  const devToolsEnhancer = composeWithDevTools({});
  const store = createStore(rootReducer, {}, devToolsEnhancer(applyMiddleware(thunk)));
  return { store };
};

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

