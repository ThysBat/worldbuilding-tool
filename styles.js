import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    --card-size-s: 3rem;
    --card-size-m: 6.5rem;
    
    --border-radius-s: 0.6rem;
    --border-radius-m: 1.6rem;

    --gap-xs: 0.18rem;
    --gap-s: 0.5rem;
    --gap-m: 1rem;

    --padding-s: 0.5rem;
    --padding-m: 1rem;
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
