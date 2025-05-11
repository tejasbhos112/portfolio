import { FaGraduationCap, FaUniversity, FaLightbulb } from "react-icons/fa";

const About = () => (
  <section className="relative max-w-5xl mx-auto my-20">
    {/* Animated background decorations */}
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#5B4FFF]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF6B6B]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="glass-effect rounded-3xl p-8 md:p-14 shadow-2xl">
      <h2 className="text-4xl font-extrabold gradient-text mb-12 tracking-tight">Education</h2>
      
      {/* Education Section */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-6 items-center glass-effect rounded-2xl p-6 hover-glow transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-[#5B4FFF]/30 flex items-center justify-center mb-4 md:mb-0">
            <FaGraduationCap className="text-[#5B4FFF] text-3xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Master of Computer Application (MCA)</h3>
            <p className="text-[#5B4FFF] font-medium mb-1">MES Institute of Technology and Management, Pune</p>
            <p className="text-slate-400">2024 - 2026 <span className="ml-2 px-3 py-1 bg-[#5B4FFF]/20 text-[#5B4FFF] rounded-full text-xs font-semibold">Pursuing</span></p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center glass-effect rounded-2xl p-6 hover-glow transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/30 flex items-center justify-center mb-4 md:mb-0">
            <FaUniversity className="text-[#FF6B6B] text-3xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Computer Application (BCA)</h3>
            <p className="text-[#FF6B6B] font-medium mb-1">MKSSS's K.B.Joshi Institute of Information Technology</p>
            <p className="text-slate-400">2021 - 2024 <span className="ml-2 px-3 py-1 bg-[#FF6B6B]/20 text-[#FF6B6B] rounded-full text-xs font-semibold">CGPA: 8.33</span></p>
          </div>
        </div>
      </div>

     
    </div>
  </section>
);

export default About;