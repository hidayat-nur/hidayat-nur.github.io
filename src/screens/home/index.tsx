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
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Experiences</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
          </ul>
        </div>
      </header>

      <div className="intro">
        <img src={IMG.AVATAR} className="avatar" />
        <p className="intro-title">M. Nur Hidayat</p>
        <p className="intro-descript">
          A hybrid mobile developer based in Indonesia.
          <br />A javascript enthusiast and an introvert. maybe this blog has
          made me a little less introverted, LOL :)
        </p>
      </div>

      <hr />

      <div className="blog">
        <div className="blog-head">
          <p className="blog-title">Latest Articles</p>
          <a href="" className="blog-nav">
            All articles
          </a>
        </div>
        <div className="blog-list">
          <ul>
            <li>
              <a href="#">Why Every Developer Should Start Blogging</a>
              <p>September 08, 2019</p>
            </li>
            <li>
              <a href="#">
                The Developer&apos;s Guide to achieving Deep Work for Focus &
                Productivity
              </a>
              <p>September 08, 2019</p>
            </li>
            <li>
              <a href="#">I had a dream, but bugs were in the way</a>
              <p>September 08, 2019</p>
            </li>
            <li>
              <a href="#">Why Every Developer Should Start Blogging</a>
              <p>September 08, 2019</p>
            </li>
            <li>
              <a href="#">
                The Developer&apos;s Guide to achieving Deep Work for Focus &
                Productivity
              </a>
              <p>September 08, 2019</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <p className="copyright">
          © 2023 <b>M Nur Hidayat</b>. All Rights Reserved.
        </p>
        <p className="tech">
          Powered by: React, Typescript, Eslint, Github And Etc.
        </p>
      </div>
    </div>
  );
}

export default Home;
