import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Faraz Ahmed
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a junior React.js Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          I'm a junior React.js developer who wants to become a fullstack
          developer. Currently I'm focused on building responsive components
          usign React.js
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work <AiOutlineArrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
