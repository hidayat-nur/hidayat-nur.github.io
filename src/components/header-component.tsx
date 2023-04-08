import React from "react";
import { IMG } from "../assets/images";

export const HeaderComponent = () => {
  return (
    <header>
      <a href="">
        <img
          src={IMG.HIDAYATLAB_LOGO}
          className="logo"
          alt="Hidayat Nur Lab Logo"
        />
      </a>

      <div className="social">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/hidayat-nur-51480210a/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IMG.LINKEDIN_LOGO} alt="LinkedIn logo" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hidayat-nur"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IMG.GITHUB_LOGO} alt="GitHub logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@border-radius"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IMG.YOUTUBE_LOGO} alt="YouTube logo" />
            </a>
          </li>
        </ul>
      </div>

      <nav className="navigation">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Experiences</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
