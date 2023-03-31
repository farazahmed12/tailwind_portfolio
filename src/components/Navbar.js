import React from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-scroll";

import logo from "../assets/Faraz_Ahmed.png";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Link to="home" smooth="true" className="cursor-pointer">
          <img src={logo} alt="Logo" style={{ width: "90px" }} />
        </Link>
      </div>

      {/* Menu  */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth="true">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth="true">
            About
          </Link>{" "}
        </li>
        <li>
          <Link to="work" smooth="true">
            Work
          </Link>
        </li>
        <li>
          <Link to="skills" smooth="true">
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth="true">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About </li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
