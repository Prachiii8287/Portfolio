// Project.jsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "EcoEats",
    description: "EcoEats is a blockchain-powered platform that combats food waste by promoting redistribution, composting, and eco-friendly habits through rewards and awareness.",
    // image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80",
    image: "/images/ecoeatsimg.png",
    github: "https://github.com/Prachiii8287/EcoEats",
    live: "https://imaginative-mandazi-dd0178.netlify.app/",
    tags: ["HTML", "Tailwind Css", "Web3","Javascript"]
  },
  {
    title: "SEEMA",
    description: "SEEMA (Solar Energy Equity Management Application) is a decentralized platform that enables solar panel owners to monetize surplus energy using blockchain-based Urja tokens, promoting clean energy access and equity.",
    //image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
    image: "/images/seemaimg.png",
    github: "https://github.com/Prachiii8287/Seema",
    // live: "https://seema.com",
    tags: ["Figma", "Flutter", "Polygon"]
  },
  {
    title: "Bon Voyage",
    description: "Bon Voyage is a user-friendly vacation booking platform offering diverse travel packages and seamless experiences for both travelers and administrators.",
    // image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80",
    image:"/images/bonimg.jpg",
    github: "https://github.com/Prachiii8287/BonVoyage",
    live: "https://65ae04d77f6077f381dc06a8--cheery-sprite-5f8d56.netlify.app/",
    tags: ["HTML", "CSS", "Javasrcipt", "React","Chakra UI"]
  },
  {
    title: "XConnect",
    description: "XConnect is a digital platform that connects Walmart with Indian MSMEs by providing real-time data, interactive maps, and search tools to optimize global trade logistics.",
    //image: "https://images.unsplash.com/photo-1625050795898-1efc356f5a59?auto=format&fit=crop&q=80",
    image:"/images/xconnectimg.png",
    github: "https://github.com/Prachiii8287/XConnect",
    live: "https://xconnect.com",
    tags: ["React Native", "Firebase", "Node.js", "MongoDB"]
  }
];

const Projects = () => {
  return (
    <section id="projects">
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-15 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group h-[400px] rounded-xl overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-transform duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
              
              {/* Project Title (Always Visible) */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-0 transition-transform duration-500 z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              </div>
              
              {/* Project Details (Visible on Hover) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <p className="text-white/90 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;