import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    :root {
        --white: #FFFFFF;
        --black: #000000;
        --purple: #A5A5FF;
        --blue-1: #0000FF;
        --blue-2: #01011C;
    }

    body {
        background-color: ${({ theme }) => theme.themeColor};
        min-width: 100%;
        min-height: 100vh;

        transition: background-color 0.4s;
    }

    ul, ol, li {
        list-style: none;
    }

    button {
        cursor: pointer;
        outline: none;
    }

    input{
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;
