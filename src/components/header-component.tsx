import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IMG } from "../assets/images";

export const HeaderComponent = () => {
  const path = useLocation();
  const pathName = path.pathname;

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
          <li className={pathName === "/" ? "nav-active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={pathName === "/blog" ? "nav-active" : ""}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={pathName === "/experiences" ? "nav-active" : ""}>
            <Link to="#">Experiences</Link>
          </li>
          <li className={pathName === "/portfolio" ? "nav-active" : ""}>
            <Link to="#">Portfolio</Link>
          </li>
          {/* <li className={pathName === "/aboutUs" ? "nav-active" : ""}>
            <Link to="/aboutUs">About me</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
