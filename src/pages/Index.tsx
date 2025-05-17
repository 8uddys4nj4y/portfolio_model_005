
import CursorFollower from '@/components/CursorFollower';
import RotatingGears from '@/components/RotatingGears';
import FloatingElements from '@/components/FloatingElements';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Console from '@/components/Console';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Decorative background elements */}
      <RotatingGears count={8} opacity={0.15} />
      <FloatingElements count={12} />
      
      {/* Custom cursor */}
      <CursorFollower />
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        
        {/* Terminal console - interactive element */}
        <div className="max-w-md mx-auto -mt-10 mb-20 px-4 hover:transform hover:scale-105 transition-transform duration-300">
          <Console />
        </div>
        
        {/* Add dividers between sections with hover effects */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 h-px hover:h-[2px] transition-all duration-300" 
               style={{ background: 'linear-gradient(90deg, transparent, rgba(57, 255, 20, 0.5), transparent)', boxShadow: '0 0 15px rgba(57, 255, 20, 0.3)' }}>
          </div>
          <Services />
        </div>
        
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 h-px hover:h-[2px] transition-all duration-300" 
               style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), transparent)', boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)' }}>
          </div>
          <Skills />
        </div>
        
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 h-px hover:h-[2px] transition-all duration-300" 
               style={{ background: 'linear-gradient(90deg, transparent, rgba(191, 0, 255, 0.5), transparent)', boxShadow: '0 0 15px rgba(191, 0, 255, 0.3)' }}>
          </div>
          <Certificates />
        </div>
        
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 h-px hover:h-[2px] transition-all duration-300" 
               style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 95, 31, 0.5), transparent)', boxShadow: '0 0 15px rgba(255, 95, 31, 0.3)' }}>
          </div>
          <Contact />
        </div>
        
        {/* Footer */}
        <footer className="py-6 px-4 border-t border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors duration-300">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground hover:text-white transition-colors duration-300">
              © {new Date().getFullYear()} ChronoForge. All rights reserved in this timeline.
            </p>
            
            <div className="mt-4 sm:mt-0">
              <p className="text-xs console-text flex items-center gap-2 hover:text-neon-cyan transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                <span>SYSTEM ONLINE</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
