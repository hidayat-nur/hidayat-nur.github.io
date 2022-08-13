import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppNavigator from "./navigator/AppNavigator";

function App() {
  return (
    <BrowserRouter>
      <AppNavigator />
    </BrowserRouter>
  );
}

export default App;
