import { createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));
  return { store };
};

export type RootState = ReturnType<typeof reducers>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

