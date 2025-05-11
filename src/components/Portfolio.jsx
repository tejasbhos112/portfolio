import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import smsImg from "../assets/sms.png";
import recipeImg from "../assets/recipe.png";

const projects = [
  {
    title: "Student Management System",
    description: "A full-featured system for managing students, including CRUD operations, enrollment, and fee management.",
    technologies: ["Java", "Hibernate", "Spring Boot"],
    image: smsImg,
    github: "#",
    demo: "#"
  },
  {
    title: "Recipe Sharing Platform",
    description: "A real-time recipe sharing app with search and filter functionalities.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: recipeImg,
    github: "https://github.com/tejasbhos112/cooksy-RSP",
    demo: "#"
  }
];

const Portfolio = () => (
  <section className="relative max-w-6xl mx-auto my-20">
    {/* Animated background decorations */}
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#5B4FFF]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF6B6B]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="glass-effect rounded-3xl p-8 md:p-14 shadow-2xl">
      <h2 className="text-4xl font-extrabold gradient-text mb-12 tracking-tight">Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-effect rounded-2xl p-6 hover-glow transition-all duration-300 overflow-hidden">
            <img src={project.image} alt={project.title} className="rounded-xl mb-4 h-48 w-full object-cover shadow-lg" />
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="mb-4 text-slate-300 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-[#5B4FFF]/20 text-[#5B4FFF] rounded-full text-sm font-medium hover:bg-[#5B4FFF]/30 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} className="flex items-center gap-2 text-[#5B4FFF] hover:text-[#FF6B6B] transition-colors" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;