
import { useEffect, useState, useRef } from 'react';
import { Terminal } from 'lucide-react';

const Console = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const messagesRef = useRef<string[]>([
    "Initializing system...",
    "Loading chrono-interface...",
    "Connection established.",
    "Welcome to ChronoForge Portfolio v1.0.0",
    "Engineer of Tomorrow's Digital Worlds",
    "Type 'help' for available commands."
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  
  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return;
    
    if (currentIndex < messagesRef.current.length) {
      const timer = setTimeout(() => {
        const message = messagesRef.current[currentIndex];
        
        if (currentChar < message.length) {
          setText(prev => prev + message[currentChar]);
          setCurrentChar(prev => prev + 1);
        } else {
          setText(prev => prev + '\n');
          setCurrentIndex(prev => prev + 1);
          setCurrentChar(0);
        }
      }, Math.random() * 50 + 20); // Random typing speed for realistic effect
      
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, currentChar, isTyping]);
  
  // Handle command input
  const handleCommand = () => {
    if (!input.trim()) return;
    
    const command = input.trim().toLowerCase();
    setCommandHistory(prev => [...prev, `> ${input}`]);
    
    // Process commands
    switch (command) {
      case 'help':
        setCommandHistory(prev => [...prev, 
          'Available commands:',
          '  help - Show this message',
          '  about - About the developer',
          '  skills - List developer skills',
          '  projects - View sample projects',
          '  contact - Contact information',
          '  clear - Clear the console',
        ]);
        break;
      case 'about':
        setCommandHistory(prev => [...prev, 
          'ChronoForge Portfolio',
          'A futuristic mechanical-themed showcase of engineering brilliance.',
          'Specialized in blending digital technology with creative design.',
        ]);
        break;
      case 'skills':
        setCommandHistory(prev => [...prev, 
          'Skills Analysis:',
          '  [■■■■■■■■■□] Python Development - 90%',
          '  [■■■■■■■■□□] Game Development - 80%',
          '  [■■■■■■■■■□] Machine Learning - 90%',
          '  [■■■■■■■■□□] Web Development - 80%',
        ]);
        break;
      case 'projects':
        setCommandHistory(prev => [...prev, 
          'Notable Projects:',
          '  - Time Machine Interface',
          '  - Quantum Processor Algorithm',
          '  - Neural Network Engine',
          '  - Holographic Display System',
        ]);
        break;
      case 'contact':
        setCommandHistory(prev => [...prev, 
          'Contact Protocols:',
          '  Email: contact@chronoforge.dev',
          '  Location: Digital Nexus, Grid Sector 7',
          '  Quantum Entanglement ID: CF-9871-X4',
        ]);
        break;
      case 'clear':
        setCommandHistory([]);
        break;
      default:
        setCommandHistory(prev => [...prev, `Command not recognized: ${command}`]);
    }
    
    setInput('');
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  return (
    <div className="tech-panel p-3 w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2 border-b border-neon-cyan/30 pb-2">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-neon-cyan" />
          <span className="console-text text-neon-cyan text-xs">CHRONOS_TERMINAL</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-neon-green"></div>
          <div className="w-2 h-2 rounded-full bg-neon-orange"></div>
          <div className="w-2 h-2 rounded-full bg-neon-violet"></div>
        </div>
      </div>
      
      <div className="console-text text-xs text-neon-cyan/90 whitespace-pre-wrap mb-2 h-40 overflow-y-auto scrollbar-hide">
        {text}
        
        {/* Show command history after initial typing animation */}
        {!isTyping && commandHistory.map((cmd, i) => (
          <div key={i} className={cmd.startsWith('>') ? 'text-neon-green' : ''}>{cmd}</div>
        ))}
        
        {/* Show input line with blinking cursor */}
        {!isTyping && (
          <div className="flex items-center">
            <span className="text-neon-green mr-1">&gt;</span>
            <span>{input}</span>
            <span className={`w-2 h-4 ml-px ${cursorVisible ? 'bg-neon-cyan' : 'bg-transparent'}`}></span>
          </div>
        )}
      </div>
      
      {!isTyping && (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="hidden"
          autoFocus
        />
      )}
    </div>
  );
};

export default Console;
