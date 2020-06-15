import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import ThemeProvider from 'src/ui/styled/ThemeProvider';
import { Provider } from 'react-redux';
import createStore from './duck';

const { store } = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
