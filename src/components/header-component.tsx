import React from "react";
import { Link } from "react-router-dom";
import { IMG } from "../assets/images";

export const HeaderComponent = () => {
  return (
    <header>
      <Link to="/">
        <img
          src={IMG.HIDAYATLAB_LOGO}
          className="logo"
          alt="Hidayat Nur Lab Logo"
        />
      </Link>

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Experiences</Link>
          </li>
          <li>
            <Link to="/aboutUs">About me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
