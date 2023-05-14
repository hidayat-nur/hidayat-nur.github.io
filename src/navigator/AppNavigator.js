import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../screens/about-us";
import Home from "../screens/home";
import Blog from "../screens/blog";
import BlogDetails from "../screens/blog/details";

function AppNavigator() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/details" element={<BlogDetails />} />
    </Routes>
  );
}

export default AppNavigator;
