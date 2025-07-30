export default function BarChart({
    data,
    width = 400,
    barColor = "#00B2CA",
    axisColor = "#1D4E89",
  }) {
    const max = Math.max(...data.map((d) => d.value), 0);
    const chartHeight = 200;
    const topPadding = 20;
    const totalHeight = chartHeight + topPadding + 40;
    const barWidth = width / data.length;
  
    return (
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${totalHeight}`} className="w-full h-auto max-w-full">
          {/* les barres */}
          {data.map((d, i) => {
            const barHeight = (d.value / max) * chartHeight;
            const x = i * barWidth + barWidth * 0.1;
            const y = topPadding + (chartHeight - barHeight);
            return (
              <rect
                key={`bar-${i}`}
                x={x}
                y={y}
                width={barWidth * 0.8}
                height={barHeight}
                fill={barColor}
                className="hover:opacity-80 transition-opacity duration-200"
              />
            );
          })}
  
          {/* axe horizontal */}
          <line
            x1="0"
            y1={topPadding + chartHeight}
            x2={width}
            y2={topPadding + chartHeight}
            stroke={axisColor}
            strokeWidth="1"
          />
  
          {/* labels x-axis */}
          {data.map((d, i) => {
            const x = i * barWidth + barWidth * 0.5;
            return (
              <text
                key={`label-${i}`}
                x={x}
                y={topPadding + chartHeight + 15}
                className="text-xs fill-[#1D4E89]"
                textAnchor="middle"
              >
                {d.label}
              </text>
            );
          })}
  
          {/* valeurs sur les barres */}
          {data.map((d, i) => {
            const barHeight = (d.value / max) * chartHeight;
            const x = i * barWidth + barWidth * 0.5;
            const y = topPadding + (chartHeight - barHeight) - 6;
            return (
              <text
                key={`value-${i}`}
                x={x}
                y={y}
                className="text-sm font-semibold fill-[#1D4E89]"
                textAnchor="middle"
              >
                {d.value}
              </text>
            );
          })}
        </svg>
      </div>
    );
  }
  