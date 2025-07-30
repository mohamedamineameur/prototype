import { useState } from "react";

const colors = ["#00B2CA", "#1D4E89", "#f4f4f4", "#d9eaf7", "#80ced7", "#007ea7"];

function polarToCartesian(cx, cy, r, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    "L", x, y,
    "Z"
  ].join(" ");
}

export default function PieChart({ data, size = 200 }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulative = 0;

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-xs h-auto"
      >
        {data.map((slice, index) => {
          const value = (slice.value / total) * 360;
          const path = describeArc(
            size / 2,
            size / 2,
            size / 2 - 10,
            cumulative,
            cumulative + value
          );
          const color = colors[index % colors.length];
          const isHovered = index === hoveredIndex;
          cumulative += value;

          return (
            <path
              key={index}
              d={path}
              fill={color}
              className={`transition-all duration-300 ${isHovered ? 'opacity-80 scale-105' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}
      </svg>

      <ul className="w-full max-w-xs text-sm space-y-1 text-[#1D4E89]">
        {data.map((item, i) => (
          <li key={i} className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[i % colors.length] }}
              ></span>
              {item.label}
            </span>
            <span className="font-semibold">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
