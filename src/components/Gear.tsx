
import { cn } from "@/lib/utils";

interface GearProps {
  size?: number;
  className?: string;
  color?: string;
  toothCount?: number;
  innerRadius?: number;
}

export const Gear = ({
  size = 100,
  className,
  color = "#00FFFF",
  toothCount = 8,
  innerRadius = 0.7,
}: GearProps) => {
  // Calculate dimensions
  const radius = size / 2;
  const innerRadiusValue = radius * innerRadius;
  const toothHeight = radius * 0.2;

  // Generate gear teeth points
  const generateGearPoints = () => {
    const points = [];
    const angleStep = (2 * Math.PI) / toothCount;

    for (let i = 0; i < toothCount; i++) {
      const startAngle = i * angleStep;
      const endAngle = startAngle + angleStep / 2;
      const midAngle = startAngle + angleStep / 4;
      
      // Outer tooth point
      const outerX = radius * Math.cos(midAngle) + radius;
      const outerY = radius * Math.sin(midAngle) + radius;
      
      // Start of tooth (inner circle)
      const startX = (radius - toothHeight / 2) * Math.cos(startAngle) + radius;
      const startY = (radius - toothHeight / 2) * Math.sin(startAngle) + radius;
      
      // End of tooth (inner circle)
      const endX = (radius - toothHeight / 2) * Math.cos(endAngle) + radius;
      const endY = (radius - toothHeight / 2) * Math.sin(endAngle) + radius;
      
      points.push(`${startX},${startY} ${outerX},${outerY} ${endX},${endY}`);
    }
    
    return points.join(" ");
  };

  // Generate inner circular points
  const generateInnerCirclePoints = () => {
    const points = [];
    const steps = 36; // More steps for smoother circle
    const angleStep = (2 * Math.PI) / steps;

    for (let i = 0; i < steps; i++) {
      const angle = i * angleStep;
      const x = innerRadiusValue * Math.cos(angle) + radius;
      const y = innerRadiusValue * Math.sin(angle) + radius;
      points.push(`${x},${y}`);
    }

    return points.join(" ");
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={cn("gear", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer gear teeth */}
      <polygon
        points={generateGearPoints()}
        fill={color}
        opacity="0.8"
      />
      
      {/* Inner circle */}
      <polygon
        points={generateInnerCirclePoints()}
        fill={color}
        opacity="0.6"
      />
      
      {/* Center hole */}
      <circle
        cx={radius}
        cy={radius}
        r={innerRadiusValue * 0.3}
        fill="#111"
        stroke={color}
        strokeWidth="1"
      />
      
      {/* Center dot */}
      <circle
        cx={radius}
        cy={radius}
        r={innerRadiusValue * 0.1}
        fill={color}
        opacity="0.9"
      />

      {/* Add spokes */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = innerRadiusValue * 0.3 * Math.cos(angle) + radius;
        const y1 = innerRadiusValue * 0.3 * Math.sin(angle) + radius;
        const x2 = innerRadiusValue * 0.9 * Math.cos(angle) + radius;
        const y2 = innerRadiusValue * 0.9 * Math.sin(angle) + radius;
        
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="2"
            opacity="0.7"
          />
        );
      })}
    </svg>
  );
};
