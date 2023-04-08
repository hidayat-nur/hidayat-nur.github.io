import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppNavigator from "./navigator/AppNavigator";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppNavigator />
    </BrowserRouter>
  );
}

export default App;
