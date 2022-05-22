import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    font-family: "Avenir", sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    svg{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyle;
