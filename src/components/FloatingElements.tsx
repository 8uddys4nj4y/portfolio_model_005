
import { useState, useEffect } from 'react';

const BinaryString = ({ className }: { className?: string }) => {
  const [binary, setBinary] = useState('');
  
  useEffect(() => {
    const length = Math.floor(Math.random() * 8) + 8; // 8-16 characters
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.random() > 0.5 ? '1' : '0';
    }
    setBinary(result);
  }, []);
  
  return (
    <div className={`console-text text-xs opacity-50 whitespace-nowrap ${className}`}>
      {binary}
    </div>
  );
};

const CircuitLine = ({ className }: { className?: string }) => {
  const height = Math.floor(Math.random() * 100) + 50; // 50-150px
  const width = Math.random() > 0.5 ? '1px' : '2px';
  const ends = Math.random() > 0.7;
  
  return (
    <div 
      className={`relative ${className}`}
      style={{ height }}
    >
      <div 
        className="absolute inset-0"
        style={{ 
          width, 
          background: `linear-gradient(to bottom, 
            transparent, 
            rgba(0, 255, 255, 0.7) 10%, 
            rgba(0, 255, 255, 0.7) 90%, 
            transparent
          )`,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      ></div>
      
      {/* Circuit endpoints */}
      {ends && (
        <>
          <div 
            className="absolute top-0 w-2 h-2 rounded-full bg-neon-cyan"
            style={{ left: 'calc(50% - 3px)' }}
          ></div>
          <div 
            className="absolute bottom-0 w-2 h-2 rounded-full bg-neon-cyan"
            style={{ left: 'calc(50% - 3px)' }}
          ></div>
        </>
      )}
    </div>
  );
};

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements = ({ count = 15, className = '' }: FloatingElementsProps) => {
  const elements = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100; // 0-100%
    const top = Math.random() * 100; // 0-100%
    const opacity = Math.random() * 0.4 + 0.1; // 0.1-0.5
    const delay = Math.random() * 5; // 0-5s
    const duration = Math.random() * 15 + 20; // 20-35s
    const type = Math.random() > 0.6 ? 'binary' : 'circuit';
    
    return {
      left,
      top,
      opacity,
      delay,
      duration,
      type,
      zIndex: Math.floor(Math.random() * 3), // 0-2
    };
  });
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((el, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${el.left}%`,
            top: `${el.top}%`,
            opacity: el.opacity,
            zIndex: el.zIndex,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          {el.type === 'binary' ? (
            <BinaryString />
          ) : (
            <CircuitLine />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
