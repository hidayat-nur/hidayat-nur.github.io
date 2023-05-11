import React from "react";
import { FooterComponent } from "../../components/footer-component";
import { HeaderComponent } from "../../components/header-component";
import { BlogListComponent } from "./components/blog-list-component";

function Blog() {
  return (
    <div>
      <HeaderComponent />
      <BlogListComponent />
      <FooterComponent />
    </div>
  );
}

export default Blog;
