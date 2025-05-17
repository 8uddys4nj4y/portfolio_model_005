
import { Code, Gamepad2, Laptop, Blocks } from 'lucide-react';
import { Gear } from './Gear';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  color = "#00FFFF",
  delay = 0
}) => {
  return (
    <div 
      className="tech-panel neon-border p-6 transition-all duration-300 hover:scale-105 animate-fade-in"
      style={{ 
        animationDelay: `${delay}ms`,
        backgroundImage: 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.05), transparent 70%)'
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <Icon className="text-4xl" style={{ color }} />
        <div className="opacity-50">
          <Gear size={24} color={color} className="animate-spin-medium" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2" style={{ color }}>
        {title}
      </h3>
      
      <p className="text-sm opacity-80">
        {description}
      </p>
      
      <div 
        className="mt-4 h-1 w-1/2 rounded-full" 
        style={{ 
          background: `linear-gradient(90deg, ${color}, transparent)`,
          boxShadow: `0 0 8px ${color}`
        }}
      ></div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Game Development",
      description: "Design and build immersive gaming experiences with cutting-edge technology and captivating mechanics.",
      icon: Gamepad2,
      color: "#39FF14"
    },
    {
      title: "App Development",
      description: "Create powerful, intuitive applications that deliver exceptional user experiences across all platforms.",
      icon: Laptop,
      color: "#BF00FF"
    },
    {
      title: "Python Development",
      description: "Leverage Python's versatility for automation, data analysis, AI solutions and backend systems.",
      icon: Code,
      color: "#00FFFF"
    },
    {
      title: "Web Development",
      description: "Build stunning, responsive websites with modern frameworks and innovative interaction design.",
      icon: Blocks,
      color: "#FF5F1F"
    }
  ];

  return (
    <section className="py-20 px-4 relative" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
            <span className="text-neon-cyan">Services</span> Module
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Specialized capabilities calibrated for optimal digital engineering solutions
          </p>
          
          <div className="flex justify-center mt-4">
            <div 
              className="h-1 w-24 rounded-full" 
              style={{ 
                background: `linear-gradient(90deg, transparent, #00FFFF, transparent)`,
                boxShadow: '0 0 10px #00FFFF'
              }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 150}
            />
          ))}
        </div>
      </div>
      
      {/* Section accent */}
      <div 
        className="absolute left-0 right-0 bottom-0 h-px" 
        style={{ 
          background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent)',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
        }}
      ></div>
    </section>
  );
};

export default Services;
