import React from "react";
import { IMG } from "../../assets/images";
import Files from "./../../assets/files";
import "./styles.css";

function Home() {
  return (
    <div className="center-section">
      <div className="portfolio-page">
        <div className="header-section">
          <img
            src={IMG.SALY}
            alt="Profile Picture"
            className="profile-picture"
          />
          <div>
            <h1 className="light-text">Hi there 👋 I`m Hidayat</h1>
            <p className="light-text">Software engineer in mobile</p>
          </div>
        </div>
        <div className="main-section">
          <h2 className="light-text">About Me</h2>
          <p className="light-text">
            🔭 I’m currently working on{" "}
            <a
              href="https://www.moduit.id/"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              moduit.id
            </a>{" "}
            as a react native developer. Working with lots of adding new
            features and bugfix issues to make the app even better.
            <br />
            🌱 Outside of work, I learned a lot of correct coding fundamentals
            such as clean code, code optimization, and other basic things that I
            think are important in building applications in a cool and correct
            way.
            <br />
            <br />
            Warm regards from me 😄
          </p>
          <a href={Files.cv} download className="download">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
