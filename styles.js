import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    --card-size: 6.5rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: system-ui;
  }
`;
