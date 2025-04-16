import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #22272e;
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }
`;
