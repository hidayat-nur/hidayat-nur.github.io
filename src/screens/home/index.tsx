import React from "react";
import { IMG } from "../../assets/images";
import Files from "./../../assets/files";
import "./styles.css";

function Home() {
  return (
    <div>
      <header>
        <a href="#">
          <img src={IMG.HIDAYATLAB_LOGO} className="logo" />
        </a>

        <div className="social">
          <ul>
            <li>
              <a href="#">
                <img src={IMG.LINKEDIN_LOGO} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={IMG.GITHUB_LOGO} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={IMG.YOUTUBE_LOGO} />
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
          </ul>
        </div>
      </header>

      <div className="intro">
        <h1 className="intro-title">M Nur Hidayat</h1>
        <p className="intro-descript">
          A hybrid mobile developer based in Indonesia.
          <br />
          But TLDR: I&apos;m just a nerd who loves to build projects and share
          valuable tips for new programmers on this blog.
        </p>
      </div>
    </div>
  );
}

export default Home;
