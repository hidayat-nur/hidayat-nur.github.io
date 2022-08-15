import React from "react";
import { IMG } from "../assets/images";

function Home() {
  return (
    <div>
      <div>
        <div>
          <p>
            Hi, M N Hidayat,
            <br /> React Native Engineer
          </p>
          <p>
            I have experience in react native developer for 3 years, previously
            I was also a web developer with the technology used html, css,
            jquery & codeigniter. Hope to work with you in the future
          </p>
          <button onClick={() => null}>Download Resume</button>
        </div>
        <div>
          <img src={IMG.AVATAR} alt="Hidayat" />
        </div>
      </div>
    </div>
  );
}

export default Home;
