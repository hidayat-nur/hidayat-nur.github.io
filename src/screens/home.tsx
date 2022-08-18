import React from "react";
import { IMG } from "../assets/images";

function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 h-96 items-center px-56">
        <div>
          <p className="text-gray-800 text-3xl font-medium mb-2">
            Hi, I am M N Hidayat,
            <br /> React Native Engineer from Indonesia.
          </p>
          <p className="text-gray-400 text-xl">
            I have experience in react native developer for 3 years, previously
            I was also a web developer with the technology used html, css,
            jquery & codeigniter. Hope to work with you in the future
          </p>
        </div>

        <div>
          <img
            alt="profil"
            src={IMG.AVATAR}
            className="mx-auto object-cover rounded-full h-40 w-40"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
