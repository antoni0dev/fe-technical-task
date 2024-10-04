import { createGlobalStyle } from 'styled-components';
import { COLORS } from './lib/constants';

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html {
         --color-primary: ${COLORS.primary};
         --color-gradient-bubblegum: ${COLORS.gradientBubblegum};
         --color-background: ${COLORS.background};
         --color-text-regular: ${COLORS.textRegular};
         --color-text-error: ${COLORS.textError};
         --color-transparent-gray: ${COLORS.transparentGray};
    }
    
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }
    
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
   
    input, button, textarea, select {
        font: inherit;
    }
   
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
   
    #root {
        isolation: isolate;
    }
`;
