import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/global/GlobalStyle';
import theme from './assets/global/theme';
import Router from './routes';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer id="app">
        <Router />
      </AppContainer>
    </ThemeProvider>
  );
}
