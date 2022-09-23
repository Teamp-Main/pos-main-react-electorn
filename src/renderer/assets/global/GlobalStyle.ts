import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    box-sizing: border-box;
    h1{
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
  a {
      color: #fff;
      text-decoration: none;
      outline: none
    }
    a:hover
    a:active {
      text-decoration: none;
      color:#fff;
      background-color:#f59000;}
`;
export default GlobalStyle;
