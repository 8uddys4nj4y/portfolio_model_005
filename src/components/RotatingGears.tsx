
import { Gear } from "./Gear";

interface GearsProps {
  count?: number;
  opacity?: number;
  className?: string;
}

const RotatingGears = ({ count = 6, opacity = 0.15, className }: GearsProps) => {
  // Generate random positions for gears
  const gears = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 60 + 40; // 40-100px
    const left = Math.random() * 100; // 0-100%
    const top = Math.random() * 100; // 0-100%
    const animationClass = i % 2 === 0 
      ? (i % 4 === 0 ? "animate-spin-slow" : "animate-spin-medium")
      : (i % 3 === 0 ? "animate-spin-slow-reverse" : "animate-spin-medium-reverse");
    
    const colors = ["#00FFFF", "#39FF14", "#BF00FF", "#FF5F1F"];
    const color = colors[i % colors.length];
    
    const zIndex = Math.floor(Math.random() * 3); // 0-2
    
    return { size, left, top, animationClass, color, zIndex, toothCount: Math.floor(Math.random() * 4) + 8 };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      {gears.map((gear, i) => (
        <div
          key={i}
          className={`absolute ${gear.animationClass}`}
          style={{
            left: `${gear.left}%`,
            top: `${gear.top}%`,
            zIndex: gear.zIndex,
            transform: `translate(-50%, -50%)`,
          }}
        >
          <Gear 
            size={gear.size} 
            color={gear.color} 
            toothCount={gear.toothCount} 
          />
        </div>
      ))}
    </div>
  );
};

export default RotatingGears;
