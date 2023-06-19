import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    --card-size: 6.5rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
  }
`;
