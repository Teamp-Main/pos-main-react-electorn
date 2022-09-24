import { useState } from 'react';
import { Provider } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/global/GlobalStyle';
import theme from './assets/global/theme';
import Router from './routes';
import { store } from './store/store';
import Header from './view/layout/Header';
import SideBar from './view/layout/SideBar';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ViewContiner = styled.div`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer id="app">
          <Header />
          <ViewContiner>
            <Router />
          </ViewContiner>
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}
