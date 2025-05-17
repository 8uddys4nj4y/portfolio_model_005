
import { Trophy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const CertificateCard = ({ title, organization, date, description, image, delay = 0 }) => {
  const [flipped, setFlipped] = useState(false);
  
  return (
    <div 
      className="cursor-pointer perspective-1000 animate-fade-in hover:scale-105 transition-transform duration-300"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setFlipped(!flipped)}
    >
      <div 
        className={`relative w-full h-full duration-500 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
        style={{ 
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Front */}
        <div 
          className={`tech-panel p-6 rounded-md absolute w-full h-full backface-hidden ${flipped ? 'invisible' : ''} hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex justify-between items-start mb-4">
            <Trophy className="text-neon-cyan" />
            <span className="bg-muted text-xs px-2 py-1 rounded console-text">
              {date}
            </span>
          </div>
          
          <h3 className="text-xl font-medium mb-2 text-neon-cyan">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{organization}</p>
          
          <div 
            className="h-48 mb-4 bg-center bg-cover rounded" 
            style={{ 
              backgroundImage: `url(${image})`,
              boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)'
            }}
          ></div>
          
          <div className="flex justify-center">
            <span className="text-sm console-text text-neon-green font-medium animate-pulse">
              Click to view details
            </span>
          </div>
        </div>
        
        {/* Back */}
        <div 
          className={`tech-panel p-6 rounded-md absolute w-full h-full backface-hidden rotate-y-180 ${!flipped ? 'invisible' : ''}`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-xl font-medium mb-4 text-neon-cyan">{title}</h3>
          <p className="text-base mb-4">{description}</p>
          
          <div className="mt-auto space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Issuing Organization</span>
              <span className="font-medium">{organization}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Issue Date</span>
              <span className="font-medium">{date}</span>
            </div>
          </div>
          
          <div className="mt-5 flex justify-end">
            <button className="flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-cyan/70 transition-colors">
              <span>View Certificate</span>
              <ExternalLink size={14} />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            <span className="text-sm console-text text-neon-green animate-pulse">
              Click to flip back
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  const certificates = [
    {
      title: "Advanced Machine Learning",
      organization: "TechLabs Academy",
      date: "2024",
      description: "Certification in advanced machine learning techniques including neural networks, deep learning, and practical applications in data science.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Game Development Master",
      organization: "Digital Crafters Institute",
      date: "2023",
      description: "Comprehensive certification covering game mechanics, level design, character development, and multi-platform deployment strategies.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Python Architecture Design",
      organization: "CodeSphere University",
      date: "2023",
      description: "Expert-level certification in Python architecture design patterns, system optimization, and enterprise-level application development.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Full-Stack Web Engineering",
      organization: "WebStack Institute",
      date: "2022",
      description: "Advanced certification in full-stack web development including modern frameworks, responsive design, APIs, and deployment strategies.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-20 px-4 relative" id="certificates">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
            Achievement <span className="text-neon-cyan">Records</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Verified qualifications and technical certifications
          </p>
          
          <div className="flex justify-center mt-4">
            <div 
              className="h-1 w-24 rounded-full" 
              style={{ 
                background: `linear-gradient(90deg, transparent, #BF00FF, transparent)`,
                boxShadow: '0 0 10px #BF00FF'
              }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
