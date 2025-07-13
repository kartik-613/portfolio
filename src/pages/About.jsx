import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Demo from "../assets/Demo.png";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#00B5B8] text-[#001858]">
      <main className="flex-grow px-6 py-16 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="">
            <img
              src={Demo}
              alt="Person with laptop"
              className="w-96 h-auto"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-yellow-400 mb-6"></div>
            <p className="text-base mb-4">
              I do not fear computers. I fear the lack of them.
            </p>
            <p className="text-base mb-4">
              I'm an MCA student at LNCT Bhopal (2023–2025) with a CGPA of 7.4. I love building full-stack web apps using the MERN stack. Clean code and continuous learning are my passions.
            </p>
            <p className="text-base mb-6">
              I enjoy working with technologies like JavaScript, React.js, and Node.js. I'm always eager to learn and build useful things.
            </p>

            {/* Resume button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-yellow-400 text-black font-semibold py-2 px-4 rounded shadow hover:bg-yellow-500 transition"
            >
              RESUME
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl">
              <a href="https://linkedin.com/in/kartik-upadhyay11" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/kartik-613" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
