import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #FFFFFF;
        --black: #000000;
        --purple: #A5A5FF;
        --blue-1: #0000FF;
        --blue-2: #01011C;
    }

    body {
        background-color: var(--white);
        min-width: 100%;
        min-height: 100vh;
    }

    ul, ol, li {
        list-style: none;
    }

    input{
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;
