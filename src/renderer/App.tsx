import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/global/GlobalStyle';
import theme from './assets/global/theme';
import Router from './routes';
import { store } from './store/store';
import Header from './view/layout/Header';

const AppContainer = styled.div`
  width: 100%;
  height: 94.4vh;
`;

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer id="app">
          <Header />
          <Router />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}
