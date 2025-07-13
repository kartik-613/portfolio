import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center pt-10 pb-16 mt-auto border-t border-white">
      <div className="mt-2 space-x-4 text-xl text-gray-400 flex justify-center items-center">
        <a
          href="https://github.com/kartik-613"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300 flex items-center gap-2"
        >
          <FaGithub className="" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/kartik-upadhyay11"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300 flex items-center gap-2"
        >
          <FaLinkedin className="" />
          LinkedIn
        </a>
        <a
          href="mailto:kartikupadhyay613@gmail.com"
          className="hover:text-gray-300 flex items-center gap-2"
        >
          <FaEnvelope className="" />
          Email
        </a>
      </div>
      <p className="mt-2 text-md font-light text-[#00B5B8]">
        Copyright &copy; {new Date().getFullYear()} Kartik Upadhyay. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
