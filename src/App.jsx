import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5B4FFF]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#4FFF8F]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <footer className="relative z-10 bg-slate-900/50 backdrop-blur-lg border-t border-slate-800 text-slate-400 text-center py-6 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Tejas Mahendra Bhos. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;