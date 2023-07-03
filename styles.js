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

    --padding-xs: 0.25rem;
    --padding-s: 0.5rem;
    --padding-m: 1rem;
    
    --margin-xs: 0.25rem;
    --margin-s: 0.5rem;
    --margin-m: 1rem;

    --color-danger: rgba(255, 50, 40, 0.5);
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
