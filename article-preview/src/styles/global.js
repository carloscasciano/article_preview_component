import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%; 
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;  
    }
    body {
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        
        font: 13px 'Manrope', sans-serif;
        font-weight: 500;
        background-color: hsl(210, 46%, 95%);
    }
`;