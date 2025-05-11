import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => (
  <header className="sticky top-0 z-50 w-full">
    <div className="glass-effect mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="text-2xl font-extrabold gradient-text tracking-wide">
          TB
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="https://github.com/tejasbhos112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors text-xl hover-glow"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tejas-bhos-698294246/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors text-xl hover-glow"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;