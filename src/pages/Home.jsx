import React from "react";
import Demo from "../assets/Demo.png";
import About from "../pages/About";
import Projects from "./Projects";
import Contact from "../pages/Contact";
import Skills from "./Skills";
// import Example from "../components/Example";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow bg-[#00B5B8] text-white flex flex-col md:flex-row items-center justify-between px-6 py-16">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, my name is{" "}
            <span className="text-black">Kartik Upadhyay</span>
          </h1>
          <p className="text-xl mb-6">
            MERN Stack Developer | React Enthusiast | JavaScript Lover
          </p>
          <a
            href="mailto:kartikupadhyay613@gmail.com"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Hire Me
          </a>
        </div>

        <div className="mt-10 md:mt-0">
          <img src={Demo} alt="Hero" className="w-md " />
        </div>
      </main>
      <About />
      <Skills />
      <Projects />
      {/* <Example /> */}
      <Contact />
    </div>
  );
};

export default Home;
