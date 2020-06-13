import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeProvider from 'src/ui/styled/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
