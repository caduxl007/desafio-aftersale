import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    height: 100%;
  }

  body {
    background:#0D343A;
    overflow:hidden;
  }

  button {
    cursor: pointer;
  }
`;
