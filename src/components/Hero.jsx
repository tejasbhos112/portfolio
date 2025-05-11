
import profilePic from "../assets/profilePic.jpg"

const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between glass-effect rounded-3xl p-8 md:p-12 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#5B4FFF]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B6B]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="flex-1 z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Hello, I'm <span className="gradient-text">Tejas Mahendra Bhos</span>
      </h1>
      <p className="mb-8 text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
        "I am a passionate and motivated MCA student with a keen interest in software development, 
        web technologies, and problem-solving. I enjoy exploring new programming languages, frameworks, and 
        tools to build efficient and scalable applications. With a strong foundation in computer science and a 
        continuous learning mindset. I am always open to collaboration and look forward to opportunities that
        challenge me to grow as a developer"
      </p>
      <div className="flex items-center gap-3">
        <span className="glass-effect text-[#5B4FFF] px-6 py-3 rounded-full font-bold hover-glow">
          Open to Opportunities
        </span>
      </div>
    </div>

    <div className="z-10 flex justify-center items-center w-full md:w-auto mt-10 md:mt-0">
      <div className="relative">
        <img
          src={profilePic}
          alt="Tejas Mahendra Bhos"
          className="w-64 h-64 rounded-full object-cover border-4 border-[#5B4FFF] shadow-2xl hover-glow"
        />
        <div className="absolute inset-0 rounded-full border-4 border-[#5B4FFF] animate-spin-slow"></div>
      </div>
    </div>
  </section>
);

export default Hero;