import React from "react";
import { IMG } from "../../../assets/images";

export const IntroComponent = () => {
  return (
    <div className="intro">
      <img src={IMG.AVATAR} className="avatar" alt="Avatar of author" />
      <p className="intro-title">M. Nur Hidayat</p>
      <p className="intro-descript">
        A hybrid mobile developer based in Indonesia.
        <br />A javascript enthusiast and an introvert maybe this blog has made
        me a little less introverted, LOL :)
      </p>
    </div>
  );
};
