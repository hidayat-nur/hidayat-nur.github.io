import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../screens/about-us";
import Home from "../screens/home";

function AppNavigator() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
}

export default AppNavigator;
