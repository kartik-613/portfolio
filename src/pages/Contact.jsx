import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Demo from "../assets/demo.png";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#00B5B8] text-[#001858]">
      <main className="flex-grow px-6 py-16 flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="">
            <img
              src={Demo}
              alt="Contact illustration"
              className="w-96 h-auto"
            />
          </div>

          {/* Right: Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <div className="h-1 w-20 bg-yellow-400 mb-6"></div>
            <p className="mb-4">Let’s get to know each other, or just drop me a line.</p>
            <p className="mb-4 text-gray-200">
              If you are looking to get a hold of me, you can drop me a message:
            </p>

            <div className="space-y-2 mb-6">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#001858]" />
                <strong>kartikupadhyay613@gmail.com</strong>
              </p>
              <p className="flex items-center gap-3">
                <FaWhatsapp className="text-[#001858]" />
                <strong>+91-XXXXXXXXXX</strong> {/* Replace with actual number if desired */}
              </p>
            </div>

            <p className="mb-4">You can also reach out to me on social media below:</p>
            <div className="flex gap-4 text-xl mt-2">
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

export default Contact;
