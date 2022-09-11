import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    h1{
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
`;
export default GlobalStyle;
