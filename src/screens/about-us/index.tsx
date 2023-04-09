import React from "react";
import { IMG } from "../../assets/images";
import { FooterComponent } from "../../components/footer-component";
import { HeaderComponent } from "../../components/header-component";
import ActivitiesSection from "./components/activities-section";
import BioSection from "./components/bio-section";
import ContactSection from "./components/contact-section";

function AboutUs() {
  return (
    <div>
      <HeaderComponent />
      <div className="content">
        <p className="about-me-title">About Me</p>
        <img src={IMG.ME} className="me-avatar" alt="Hidayat Nur" />
        <BioSection />
        <ActivitiesSection />
        <ContactSection />
        <div className="about-content">
          <p className="about-description">
            Thanks for checking out my profile, if you love what I do, you can
            drop a recommendation for me on LinkedIn, or recruit me to be your
            employee. My pleasure :)
          </p>
        </div>
      </div>
      <hr />
      <FooterComponent />
    </div>
  );
}

export default AboutUs;
