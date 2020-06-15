import React, { FC, useEffect } from 'react';
import { AppProps } from './types';
import { FullscreenPlaceholder } from 'src/ui/components';

const App: FC<AppProps> = ({ items, config, loadConfig, loadItems }) => {
  const loadData = () => {
    loadItems();
    loadConfig();
  };
  useEffect(() => {
    if (!items.data || !config.data) {
      loadData();
    }
  }, []);
  if (items.loading || config.loading) {
    return (
      <FullscreenPlaceholder>
        <h2>Loading</h2>
      </FullscreenPlaceholder>
    );
  }
  if (items.error || config.error) {
    return (
      <FullscreenPlaceholder>
        <h2>Error</h2>
        <button onClick={() => window.location.reload()}>reload page</button>
      </FullscreenPlaceholder>
    );
  }
  if (!items.data || !config.data) {
    return null;
  }
  return (
    <div>app</div>
  );
};

export default App;
