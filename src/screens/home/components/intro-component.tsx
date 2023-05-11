import React from "react";
import { IMG } from "../../../assets/images";

export const IntroComponent = () => {
  return (
    <div className="intro">
      <img src={IMG.ME} className="avatar" alt="Avatar of author" />
      <p className="intro-title">M. Nur Hidayat</p>
      <p className="intro-descript">
        I&apos;m a Hybrid Mobile Developer who is passionate about creating
        engaging UI and interactive experiences. With 3+ years of experience in
        the tech industry, I&apos;ve worked on several projects using React
        Native, Typescript, JavaScript, HTML5, CSS3, Git, GitHub,
        Styled-Components, RestAPI, and more.
      </p>
    </div>
  );
};
