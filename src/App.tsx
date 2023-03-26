import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppNavigator from "./navigator/AppNavigator";

function App() {
  console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppNavigator />
    </BrowserRouter>
  );
}

export default App;
