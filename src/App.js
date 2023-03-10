import {useState} from 'react';
import {ThemeProvider} from "styled-components";

import ButtonSample from "./testComponents/ButtonSample";
import InputSample from "./testComponents/InputSample";

import {blueTheme, orangeTheme} from "./style/themes.js";
import GlobalStyle from "./style/globalStyle.js";


import Login from "./screens/Login";

function App() {
  const [bool, setBool] = useState(false);

  function toggleTheme() {
    setBool(prevVal => !prevVal);
  };

  return (
    <ThemeProvider theme={bool ? blueTheme : orangeTheme}>
      <GlobalStyle /> 
      {/*
        <ButtonSample />
        <InputSample />
      */}
        <Login toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
