import React, { FC } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from './theme';

const ThemeProvider: FC = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    {children}
  </EmotionThemeProvider>
);

export default ThemeProvider;
