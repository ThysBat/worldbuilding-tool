import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    --card-size-s: 3rem;
    --card-size-m: 6.5rem;
    
    --border-radius-s: 0.6rem;
    --border-radius-m: 1.6rem;

    /* Spacing */
    --gap-xs: 0.18rem;
    --gap-s: 0.5rem;
    --gap-m: 1rem;

    --padding-xs: 0.25rem;
    --padding-s: 0.5rem;
    --padding-m: 1rem;
    
    --margin-xs: 0.25rem;
    --margin-s: 0.5rem;
    --margin-m: 1rem;
    
    /* Colors */
    --primary: #275dac;
    --on-primary: #ffffff;
    --primary-container: #d7e2ff;
    --on-primary-container: #001b3f;
    
    --secondary: #9b4429;
    --on-secondary: #ffffff;
    --secondary-container: #ffdbd1;
    --on-secondary-container: #3b0a00;
    
    --tertiary: #865300;
    --on-tertiary: #ffffff;
    --tertiary-container: #ffddb8;
    --on-tertiary-container: #2b1700;
    
    --error: #ba1a1a;
    --error-container: #ffdad6;
    --on-error: #ffffff;
    --on-error-container: #410002;
    
    --surface-dim: #dad8e7;
    --surface: #fbf8ff;
    --surface-bright: #fbf8ff;
    --surface-container-lowest: #ffffff;
    --surface-container-low: #f5f2ff;
    --surface-container: #efecfb;
    --surface-container-high: #e9e6f5;
    --surface-container-highest: #e3e1ef;
    --on-surface: #1a1b25;
    
    --inverse-primary: #abc7ff;
    --inverse-surface: #5b113f;
    
    --outline: #74777f;
    --outline-variant: #c4c6d0;
    
    --shadow: #000000;
    --scrim: #000000;
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
    background-color: var(--surface);
  }
`;
