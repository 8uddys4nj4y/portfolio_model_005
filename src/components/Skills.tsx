
import { CircleCheck, Database, Cpu, Code2, Globe } from 'lucide-react';

const SkillBar = ({ name, level, color, icon: Icon }) => {
  return (
    <div className="mb-6 group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon size={18} style={{ color }} className="group-hover:animate-pulse" />
          <h3 className="text-sm font-medium group-hover:text-white transition-colors">{name}</h3>
        </div>
        <span 
          className="text-xs console-text group-hover:font-bold transition-all" 
          style={{ color }}
        >
          {level}%
        </span>
      </div>
      
      <div className="h-2 bg-muted rounded-full overflow-hidden group-hover:h-3 transition-all duration-300">
        <div 
          className="h-full rounded-full relative group-hover:animate-pulse"
          style={{ 
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 10px ${color}`
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite',
              transform: 'translateX(-100%)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, items }) => {
  return (
    <div className="tech-panel p-6 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-300 hover:transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-6 border-b border-neon-cyan/30 pb-2 flex items-center gap-2">
        <CircleCheck size={16} className="text-neon-cyan" />
        <span>{title}</span>
      </h3>
      
      <div>
        {items.map((item, i) => (
          <SkillBar key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "Development Skills",
      items: [
        { name: "Python Development", level: 90, color: "#00FFFF", icon: Code2 },
        { name: "Game Development", level: 80, color: "#39FF14", icon: Gamepad },
        { name: "Machine Learning", level: 85, color: "#BF00FF", icon: Cpu },
        { name: "Web Development", level: 80, color: "#FF5F1F", icon: Globe }
      ]
    },
    {
      title: "Technical Expertise",
      items: [
        { name: "Database Management", level: 85, color: "#00FFFF", icon: Database },
        { name: "API Integration", level: 90, color: "#39FF14", icon: Link },
        { name: "Cloud Architecture", level: 75, color: "#BF00FF", icon: Cloud },
        { name: "Frontend Design", level: 80, color: "#FF5F1F", icon: Palette }
      ]
    }
  ];
  
  return (
    <section className="py-20 px-4 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
            Skill <span className="text-neon-cyan">Matrix</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Technical capabilities analysis and performance metrics
          </p>
          
          <div className="flex justify-center mt-4">
            <div 
              className="h-1 w-24 rounded-full" 
              style={{ 
                background: `linear-gradient(90deg, transparent, #39FF14, transparent)`,
                boxShadow: '0 0 10px #39FF14'
              }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
      
      {/* Add hover effect to section */}
      <div 
        className="absolute left-0 right-0 bottom-0 h-px hover:h-[2px] transition-all duration-500" 
        style={{ 
          background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent)',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
        }}
      ></div>
    </section>
  );
};

// Missing imports, let's add them
import { Gamepad, Link, Cloud, Palette } from 'lucide-react';

export default Skills;
