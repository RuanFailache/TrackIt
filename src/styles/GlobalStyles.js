import { createGlobalStyle } from 'styled-components';
import themes from './themes';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lexend Deca', sans-serif;
    background-color: ${themes.background};
  }

  h1 {
    font-family: 'Playball', cursive;
    font-size: 36px;
    line-height: 39px;
    color: ${themes.white};
  }
`;

export default GlobalStyles;
