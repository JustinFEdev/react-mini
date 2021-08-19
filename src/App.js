import "./App.css";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "./pages/Page";

function App() {
  const name = undefined;

  return (
    <Router>
      <Page />
    </Router>
  );
}

export default App;
