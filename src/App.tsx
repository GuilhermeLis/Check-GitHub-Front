import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './router';

import Context from './Context/Context';

import GlobalStyles from '~/styles/global';
import defaultTheme from '~/styles/themes/default';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Context>
          <Routes />
        </Context>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
