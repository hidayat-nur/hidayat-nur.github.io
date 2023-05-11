import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../screens/about-us";
import Home from "../screens/home";
import Blog from "../screens/blog";

function AppNavigator() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default AppNavigator;
