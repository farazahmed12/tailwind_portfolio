import React from "react";

import Working from "../assets/workImg.jpeg";
import realState from "../assets/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            Works
          </p>
          <p className="py-6">Check here some of my recent works.</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Working})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-0 text-center">
                <a href="/">
                  <button className="text-center bg-white text-gray-700 px-4 m-2 rounded text-lg font-bold py-3">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center bg-white text-gray-700 px-4 m-2 rounded text-lg font-bold py-3">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${realState})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-0 text-center">
                <a href="/">
                  <button className="text-center bg-white text-gray-700 px-4 m-2 rounded text-lg font-bold py-3">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center bg-white text-gray-700 px-4 m-2 rounded text-lg font-bold py-3">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
