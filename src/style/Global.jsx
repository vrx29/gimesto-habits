import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --COLOR-PRIMARY: #3554d1;
        --COLOR-PRIMARY-HOVER: #2E4CCA;

        --COLOR-DARK: #011627;
        --COLOR-LIGHT:#fdfffc;

        --COLOR-GRAY-100:#f8f9fa;
        --COLOR-GRAY-200:#dee2e6;
        --COLOR-GRAY-300:#ced4da;
        --COLOR-GRAY-400:#adb5bd;
        --COLOR-GRAY-500:#6c757d;
        --COLOR-GRAY-600:#495057;
        --COLOR-GRAY-700:#343a40;
        --COLOR-GRAY-800:#212529;
    }
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
