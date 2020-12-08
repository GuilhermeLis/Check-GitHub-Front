import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
      box-sizing: inherit;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 400 ${({ theme }) => theme.fonts.regular}, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.color.xiketic};
    font-family: ${({ theme }) => theme.fonts.regular}, sans-serif;
  }
`;
