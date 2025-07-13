import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "FMCG Inventory Trend System",
      description: "Zone-based consumer trend analysis with real-time stock alerts.",
      tech: ["React", "Flask", "PostgreSQL"],
      github: "https://github.com/kartik-613/inventory-trend-system",
    },
    {
      title: "School Data Scraper",
      description: "Scraped 19,000+ Indian school records using Python & PostgreSQL.",
      tech: ["React", "Python", "PostgreSQL"],
      github: "https://github.com/kartik-613/school-data-integration",
    },
    {
      title: "Event Manager App",
      description: "React Native app for event check-ins, notifications.",
      tech: ["React Native", "Firebase"],
      github: "https://github.com/kartik-613/event-manager-app",
    },
    {
      title: "MERN Blog Platform",
      description: "Full-stack blog with auth, rich editor, comments.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/kartik-613/mern-blog",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-[#00B5B8] px-6 py-16 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-[#00B5B8] text-white px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#00B5B8] underline text-sm"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
