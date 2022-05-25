import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    height:100%;
    width:100%;
    background:#fffff;
    font-family: 'Josefin Sans', sans-serif;
    color:#ffff;
}

`;

export default GlobalStyle;
