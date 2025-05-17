
import { useEffect, useState } from 'react';
import { Gear } from './Gear';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Main cursor circle */}
      <div 
        className="custom-cursor mix-blend-screen pointer-events-none" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          boxShadow: '0 0 10px 2px rgba(0, 255, 255, 0.7)',
          background: 'radial-gradient(circle, rgba(0,255,255,0.4) 0%, rgba(0,255,255,0.1) 70%, rgba(0,255,255,0) 100%)',
          transition: 'transform 0.05s ease, opacity 0.2s ease'
        }}
      />
      
      {/* Rotating gear */}
      <div 
        className="custom-cursor pointer-events-none animate-spin-medium" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: 0.7,
          transform: 'translate(-50%, -50%) scale(0.8)'
        }}
      >
        <Gear size={40} color="#00FFFF" />
      </div>
      
      {/* Gear trail particles - counter rotating */}
      <div 
        className="custom-cursor pointer-events-none animate-spin-medium-reverse" 
        style={{ 
          left: `${position.x - 20}px`, 
          top: `${position.y - 20}px`,
          opacity: 0.3,
          transform: 'translate(-50%, -50%) scale(0.5)',
          transition: 'left 0.3s ease-out, top 0.3s ease-out'
        }}
      >
        <Gear size={30} color="#39FF14" />
      </div>
      
      {/* Secondary gear */}
      <div 
        className="custom-cursor pointer-events-none animate-spin-slow" 
        style={{ 
          left: `${position.x + 20}px`, 
          top: `${position.y + 20}px`,
          opacity: 0.3,
          transform: 'translate(-50%, -50%) scale(0.5)',
          transition: 'left 0.5s ease-out, top 0.5s ease-out'
        }}
      >
        <Gear size={25} color="#BF00FF" toothCount={10} />
      </div>
    </>
  );
};

export default CursorFollower;
