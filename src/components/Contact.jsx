import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section className="relative max-w-4xl mx-auto">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5B4FFF]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="glass-effect rounded-3xl p-8 md:p-12">
      <h2 className="text-4xl font-extrabold gradient-text mb-8">Get in Touch</h2>
      
      <p className="text-slate-300 text-lg mb-12 leading-relaxed max-w-2xl">
        I'm open to exciting opportunities—feel free to reach out! Let's create something amazing together.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Contact Information */}
        <div className="flex items-center gap-4 p-4 glass-effect rounded-xl hover-glow transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-[#5B4FFF]/20 flex items-center justify-center">
            <FaEnvelope className="text-[#5B4FFF] text-xl" />
          </div>
          <div>
            <h3 className="text-slate-400 text-sm">Email</h3>
            <a 
              href="mailto:tejas.bhos30@gmail.com" 
              className="text-white hover:text-[#5B4FFF] transition-colors"
            >
              tejas.bhos30@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 glass-effect rounded-xl hover-glow transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-[#5B4FFF]/20 flex items-center justify-center">
            <FaPhone className="text-[#5B4FFF] text-xl" />
          </div>
          <div>
            <h3 className="text-slate-400 text-sm">Phone</h3>
            <a 
              href="tel:9119590909" 
              className="text-white hover:text-[#5B4FFF] transition-colors"
            >
              +91 9119590909
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 glass-effect rounded-xl hover-glow transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-[#5B4FFF]/20 flex items-center justify-center">
            <FaLinkedin className="text-[#5B4FFF] text-xl" />
          </div>
          <div>
            <h3 className="text-slate-400 text-sm">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/tejas-bhos-698294246/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#5B4FFF] transition-colors"
            >
              Tejas Bhos
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 glass-effect rounded-xl hover-glow transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-[#5B4FFF]/20 flex items-center justify-center">
            <FaGithub className="text-[#5B4FFF] text-xl" />
          </div>
          <div>
            <h3 className="text-slate-400 text-sm">GitHub</h3>
            <a 
              href="https://github.com/tejasbhos112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#5B4FFF] transition-colors"
            >
              tejasbhos112
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </section>
);

export default Contact;