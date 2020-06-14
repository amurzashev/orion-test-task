import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadConfig } from 'src/duck/actions/config';
import { RootState } from './duck';

const App:FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  console.log(state);
  useEffect(() => {
    dispatch(loadConfig());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
