import { createGlobalStyle } from 'styled-components';
import theme from 'theme/mainTheme';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,700&display=swap');

*, *::before, *::after{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}
html{
    font-size: 62.5%;
}

body{
    font-family: "Montserrat", sans-serif;
    font-size: 1.6em;
    background-color: ${theme.darkTheme.mainDark};
    padding: 0 3%;
}
`;
export default GlobalStyle;
