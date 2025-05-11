import { FaCode, FaServer, FaDatabase, FaMobile, FaTools } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Frontend and Backend using React, Node.js, MongoDB, MySQL.",
    icon: <FaCode className="text-3xl" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Full-Stack Development",
    description: "Frontend with React and backend using Node.js, Express, MongoDB/MySQL.",
    icon: <FaServer className="text-3xl" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Java Development",
    description: "Core Java and Java Web Development using JSP/Servlets.",
    icon: <FaTools className="text-3xl" />,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Database Integration",
    description: "SQL and NoSQL databases integration.",
    icon: <FaDatabase className="text-3xl" />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "API Development",
    description: "Integration and development for JavaScript and Java-based applications.",
    icon: <FaMobile className="text-3xl" />,
    gradient: "from-indigo-500 to-violet-500",
  },
];

const skills = {
  "Frontend Development": [
    "HTML",
    "CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Tailwind CSS",
  ],
  "Backend Development": [
    "Java",
    "Node.js with Express.js",
    "MySQL",
    "MongoDB",
  ],
  "Other Tools & Technologies": [
    "Postman",
    "VS Code",
    "Eclipse",
    "Git & GitHub",
  ],
  "Soft Skills": [
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Quick Learner & Adaptable",
  ],
};

const Services = () => (
  <section className="relative max-w-6xl mx-auto my-20">
    {/* Animated background decorations */}
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#5B4FFF]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF6B6B]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="glass-effect rounded-3xl p-8 md:p-14 shadow-2xl">
      <h2 className="text-4xl font-extrabold gradient-text mb-12 tracking-tight">Services</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group relative glass-effect rounded-2xl p-6 hover-glow transition-all duration-300 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5B4FFF]/20 flex items-center justify-center text-[#5B4FFF] transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5B4FFF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;