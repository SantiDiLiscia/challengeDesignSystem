import { createGlobalStyle } from "styled-components";
import InterFontTTF from "../assets/fonts/Inter-Variable.ttf";

export default createGlobalStyle`
@font-face {
    font-family: 'Inter';
    src: url(${InterFontTTF}) format('truetype');
    font-weight: 100 900;
}

* {
    font-family: Inter;
}

body {
    margin: 0;
    font-size: 16px;
    box-sizing: border-box;
}
`