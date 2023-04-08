import React from "react";
import { FooterComponent } from "../../components/footer-component";
import { BlogListComponent } from "./components/blog-list-component";
import { IntroComponent } from "./components/intro-component";
import { HeaderComponent } from "../../components/header-component";

function Home() {
  return (
    <div>
      <HeaderComponent />
      <IntroComponent />
      <hr />
      <BlogListComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
