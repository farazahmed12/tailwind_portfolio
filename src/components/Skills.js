import React from "react";

import react from "../assets/react.png";
import Html from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Docker from "../assets/docker.png";
import Kubernetes from "../assets/kubernetes.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with.</p>
        </div>
      </div>

      {/* Icons */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
          <img className="w-20 mx-auto" src={Html} alt="icon" />
          <p className="my-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
          <img className="w-20 mx-auto" src={CSS} alt="icon" />
          <p className="my-4">CSS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
          <img className="w-20 mx-auto" src={Javascript} alt="icon" />
          <p className="my-4">JAVASCRIPT</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
          <img className="w-20 mx-auto" src={react} alt="icon" />
          <p className="my-4">REACT</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
          <img className="w-20 mx-auto" src={Github} alt="icon" />
          <p className="my-4">GITHUB</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
          <img className="w-20 mx-auto" src={Tailwind} alt="icon" />
          <p className="my-4">TAILWIND</p>
        </div>{" "}
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
          <img className="w-20 mx-auto" src={Docker} alt="icon" />
          <p className="my-4">DOCKER</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
          <img className="w-20 mx-auto" src={Kubernetes} alt="icon" />
          <p className="my-4">KUBERNETES</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
