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
    --color-primary-accent-raw: 157, 105, 90;
    --color-secondary-accent-raw: 117, 139, 253;
    
    --color-danger: rgba(255, 50, 40, 0.5);
    --color-success: rgba(40, 255, 50, 0.5);
    
    --primary: rgba(var(--color-primary-raw), 1);
    --primary-900: rgba(var(--color-primary-raw), 0.9);
    --primary-800: rgba(var(--color-primary-raw), 0.8);
    --primary-700: rgba(var(--color-primary-raw), 0.7);
    --primary-600: rgba(var(--color-primary-raw), 0.6);
    --primary-500: rgba(var(--color-primary-raw), 0.5);
    --primary-400: rgba(var(--color-primary-raw), 0.4);
    --primary-300: rgba(var(--color-primary-raw), 0.3);
    --primary-200: rgba(var(--color-primary-raw), 0.2);
    --primary-100: rgba(var(--color-primary-raw), 0.1);
    
    --secondary: rgba(var(--color-secondary-raw), 1);
    --secondary-900: rgba(var(--color-secondary-raw), 0.9);
    --secondary-800: rgba(var(--color-secondary-raw), 0.8);
    --secondary-700: rgba(var(--color-secondary-raw), 0.7);
    --secondary-600: rgba(var(--color-secondary-raw), 0.6);
    --secondary-500: rgba(var(--color-secondary-raw), 0.5);
    --secondary-400: rgba(var(--color-secondary-raw), 0.4);
    --secondary-300: rgba(var(--color-secondary-raw), 0.3);
    --secondary-200: rgba(var(--color-secondary-raw), 0.2);
    --secondary-100: rgba(var(--color-secondary-raw), 0.1);
    
    --primary-accent: rgba(var(--color-primary-accent-raw), 1);
    --primary-accent-900: rgba(var(--color-primary-accent-raw), 0.9);
    --primary-accent-800: rgba(var(--color-primary-accent-raw), 0.8);
    --primary-accent-700: rgba(var(--color-primary-accent-raw), 0.7);
    --primary-accent-600: rgba(var(--color-primary-accent-raw), 0.6);
    --primary-accent-500: rgba(var(--color-primary-accent-raw), 0.5);
    --primary-accent-400: rgba(var(--color-primary-accent-raw), 0.4);
    --primary-accent-300: rgba(var(--color-primary-accent-raw), 0.3);
    --primary-accent-200: rgba(var(--color-primary-accent-raw), 0.2);
    --primary-accent-100: rgba(var(--color-primary-accent-raw), 0.1);
    
    --secondary-accent: rgba(var(--color-secondary-accent-raw), 1);
    --secondary-accent-900: rgba(var(--color-secondary-accent-raw), 0.9);
    --secondary-accent-800: rgba(var(--color-secondary-accent-raw), 0.8);
    --secondary-accent-700: rgba(var(--color-secondary-accent-raw), 0.7);
    --secondary-accent-600: rgba(var(--color-secondary-accent-raw), 0.6);
    --secondary-accent-500: rgba(var(--color-secondary-accent-raw), 0.5);
    --secondary-accent-400: rgba(var(--color-secondary-accent-raw), 0.4);
    --secondary-accent-300: rgba(var(--color-secondary-accent-raw), 0.3);
    --secondary-accent-200: rgba(var(--color-secondary-accent-raw), 0.2);
    --secondary-accent-100: rgba(var(--color-secondary-accent-raw), 0.1);
    
    --text-color: rgba(var(--color-secondary-raw), 1);
    --text-color-800: rgba(var(--color-secondary-raw), 0.8);
    --text-color-700: rgba(var(--color-secondary-raw), 0.7);
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
