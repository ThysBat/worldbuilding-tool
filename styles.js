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

    
    --color-primary-raw: 221, 209, 197;
    --color-secondary-raw: 44, 54, 76;
    
    --color-danger: rgba(255, 50, 40, 0.5);
    --color-success: rgba(40, 255, 50, 0.5);
    
    --color-primary: rgba(var(--color-primary-raw), 1);
    --color-primary-900: rgba(var(--color-primary-raw), 0.9);
    --color-primary-800: rgba(var(--color-primary-raw), 0.8);
    --color-primary-700: rgba(var(--color-primary-raw), 0.7);
    --color-primary-600: rgba(var(--color-primary-raw), 0.6);
    --color-primary-500: rgba(var(--color-primary-raw), 0.5);
    --color-primary-400: rgba(var(--color-primary-raw), 0.4);
    --color-primary-300: rgba(var(--color-primary-raw), 0.3);
    --color-primary-200: rgba(var(--color-primary-raw), 0.2);
    --color-primary-100: rgba(var(--color-primary-raw), 0.1);
    
    
    --color-secondary: rgba(var(--color-secondary-raw), 1);
    --color-secondary-900: rgba(var(--color-secondary-raw), 0.9);
    --color-secondary-800: rgba(var(--color-secondary-raw), 0.8);
    --color-secondary-700: rgba(var(--color-secondary-raw), 0.7);
    --color-secondary-600: rgba(var(--color-secondary-raw), 0.6);
    --color-secondary-500: rgba(var(--color-secondary-raw), 0.5);
    --color-secondary-400: rgba(var(--color-secondary-raw), 0.4);
    --color-secondary-300: rgba(var(--color-secondary-raw), 0.3);
    --color-secondary-200: rgba(var(--color-secondary-raw), 0.2);
    --color-secondary-100: rgba(var(--color-secondary-raw), 0.1);
    
    --text-color: rgba(var(--color-secondary-raw), 1);
    --text-color-800: rgba(var(--color-secondary-raw), 0.8);
    --text-color-600: rgba(var(--color-secondary-raw), 0.6);
    --text-color-400: rgba(var(--color-secondary-raw), 0.4);
    --text-color-200: rgba(var(--color-secondary-raw), 0.2);
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
