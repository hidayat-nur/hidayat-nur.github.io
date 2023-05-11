import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IMG } from "../assets/images";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

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
              href="https://www.linkedin.com/in/m-nur-hidayat-51480210a/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icon-social" color="#0072b1" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hidayat-nur"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icon-social" color="#171515" />
            </a>
          </li>
          {/* <li>
            <a
              href="https://www.youtube.com/@border-radius"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube className="icon-social" color="#FF0000" />
            </a>
          </li> */}
          <li>
            <a
              href="https://wa.me/085697746869"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp className="icon-social" color="#25D366" />
            </a>
          </li>
          <li>
            <a
              href="mailto:dayatznur@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineMailOutline className="icon-social" color="#141514" />
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
