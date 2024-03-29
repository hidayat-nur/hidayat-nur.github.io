import React from "react";
import { FooterComponent } from "../../components/footer-component";
import { IntroComponent } from "./components/intro-component";
import { HeaderComponent } from "../../components/header-component";

function Home() {
  return (
    <div>
      <HeaderComponent />
      <IntroComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
