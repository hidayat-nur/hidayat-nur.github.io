import React from "react";
import { IMG } from "../../assets/images";
import Files from "./../../assets/files";
import "./styles.css";

function Home() {
  return (
    <div>
      <header>
        <a href="#" className="logoLink">
          <img src={IMG.HIDAYATLAB_LOGO} className="logo" />
        </a>

        <nav>
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
        </nav>
      </header>
    </div>
  );
}

export default Home;
