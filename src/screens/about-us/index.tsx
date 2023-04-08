import React from "react";
import { IMG } from "../../assets/images";
import { FooterComponent } from "../../components/footer-component";
import { HeaderComponent } from "../../components/header-component";

function AboutUs() {
  return (
    <div>
      <HeaderComponent />
      <div className="content">
        <p className="about-me-title">About Me</p>
        <img src={IMG.ME} className="me-avatar" alt="Hidayat Nur" />
      </div>
      <hr />
      <FooterComponent />
    </div>
  );
}

export default AboutUs;
