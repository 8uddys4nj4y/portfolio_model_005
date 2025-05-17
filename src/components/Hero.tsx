
import { Gear } from './Gear';
import { Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6">
      {/* Animated background gears - decorative only */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-spin-slow" style={{ opacity: 0.1 }}>
          <Gear size={500} color="#00FFFF" toothCount={16} />
        </div>
        <div className="animate-spin-slow-reverse" style={{ opacity: 0.07 }}>
          <Gear size={400} color="#BF00FF" toothCount={12} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="animate-pulse absolute -inset-1 rounded-full bg-neon-cyan opacity-30 blur-md"></div>
            <div className="relative bg-card p-6 rounded-full border border-neon-cyan/30 shadow-lg flex items-center justify-center">
              <div className="animate-spin-medium">
                <Gear size={100} color="#39FF14" />
              </div>
              <Clock 
                size={60} 
                className="absolute text-neon-cyan animate-pulse" 
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold neon-text tracking-tight mb-4">
          CHRONO<span className="text-neon-cyan">FORGE</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-neon-cyan">
          Engineer of Tomorrow's Digital Worlds
        </p>

        <div className="mt-8 metal-texture tech-panel inline-block p-6 animate-glow">
          <div className="flex flex-wrap gap-4 justify-center">
            {['TIME', 'SPACE', 'CODE', 'CREATE'].map((word, i) => (
              <div key={i} className="console-text px-4 py-2 border border-neon-cyan/50 rounded bg-muted">
                <span className="text-neon-cyan">&gt;</span> {word}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <button className="neon-border bg-muted px-8 py-3 rounded-md text-neon-cyan font-semibold transition-all duration-300 hover:bg-neon-cyan/10">
            INITIALIZE JOURNEY
          </button>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-4 right-4 animate-spin-medium-reverse opacity-30">
        <Gear size={40} color="#FF5F1F" />
      </div>
      <div className="absolute bottom-4 left-4 animate-spin-slow opacity-30">
        <Gear size={30} color="#00FFFF" />
      </div>
    </section>
  );
};

export default Hero;
