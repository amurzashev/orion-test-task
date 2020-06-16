import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import ThemeProvider from 'src/ui/styled/ThemeProvider';
import { Provider } from 'react-redux';
import createStore from './duck';
import Modal from 'react-modal';

Modal.defaultStyles.overlay = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(255,255,255,0.5)',
};

Modal.defaultStyles.content = {
  outline: 'none',
  height: '50%',
  width: '50%',
  background: '#fff',
  padding: 20,
  borderRadius: 4,
  boxShadow: '0 0 10px 1px #e2e2e2',
};

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
