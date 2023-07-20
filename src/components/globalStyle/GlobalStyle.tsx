import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body { 
    font-family: 'Oswald', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #3e1c33;
      
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
   }
`