import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#00B5B8] text-[#001858]">
      <main className="flex-grow px-6 py-16 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white text-black p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-2 text-center">My Skills</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#00B5B8]">Languages</h3>
              <p>C, C++, JavaScript</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#00B5B8]">Frontend</h3>
              <p>HTML, CSS, Tailwind CSS, React.js</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#00B5B8]">Backend</h3>
              <p>Node.js, Express.js</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#00B5B8]">Database</h3>
              <p>MongoDB, MySQL</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#00B5B8]">Tools</h3>
              <p>Git, GitHub, Postman</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#00B5B8]">Deployment</h3>
              <p>Netlify, Render</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#00B5B8]">Languages Known</h3>
              <p>English, Hindi</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
