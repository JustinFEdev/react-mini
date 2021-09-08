import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "./pages/Page";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
// import { Route, Switch } from "react-router-dom";
// import Main from "./components/Main";
// import Kakao from "./components/kakao/Kakao";
// import Krafton from "./components/krafton/Krafton";
// import Nexon from "./components/nexon/Nexon";
import KrafNav from "./navigation/KrafNav";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  // const name = undefined;
  const [theme, setTheme] = useState("light");
  console.log("theme");
  console.log(theme);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log("theme 모드 설정");
    console.log(theme);
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <KrafNav onClick={() => themeToggler()} />
          <Page />
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
