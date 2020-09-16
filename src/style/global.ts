import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    font-family: 'Roboto', sans-serif;
  }
  body {
    font-size: 16px;
  }

  button {
    border: 0;
    outline: none;
    cursor: pointer;
  }
`