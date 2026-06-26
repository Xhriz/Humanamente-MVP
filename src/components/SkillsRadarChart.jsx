export default function SkillsRadarChart({ scores }) {
  const skills = [
    { name: "Consciência\nsituacional", value: scores?.consciencia_situacional || 0 },
    { name: "Tomada de\ndecisão", value: scores?.tomada_decisao || 0 },
    { name: "Cooperação /\ntrabalho em equipe", value: scores?.cooperacao || 0 },
    { name: "Liderança /\nhabilidades gerenciais", value: scores?.lideranca || 0 },
    { name: "Comunicação", value: scores?.comunicacao || 0 },
  ];

  const levels = 5;
  const maxValue = 5;
  const radius = 120;
  const centerX = 200;
  const centerY = 200;
  const angleSlice = (Math.PI * 2) / skills.length;

  const getCoordinates = (index, value) => {
    const angle = angleSlice * index - Math.PI / 2;
    const r = (value / maxValue) * radius;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  };

  const getLevelCoordinates = (index, level) => {
    const angle = angleSlice * index - Math.PI / 2;
    const r = (level / levels) * radius;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  };

  const getAxisEndpoint = (index) => {
    const angle = angleSlice * index - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const skillsPath = skills
    .map((skill, i) => {
      const coords = getCoordinates(i, skill.value);
      return `${coords.x},${coords.y}`;
    })
    .join(" ");

  const levelPaths = Array.from({ length: levels }, (_, level) => {
    return skills
      .map((_, i) => {
        const coords = getLevelCoordinates(i, level + 1);
        return `${coords.x},${coords.y}`;
      })
      .join(" ");
  });

  return (
    <div className="skills-radar-container">
      <svg width="400" height="400" viewBox="0 0 400 400">
        <defs>
          <style>{`
            .level-line { stroke: #e0e0e0; stroke-width: 1; fill: none; }
            .axis-line { stroke: #d0d0d0; stroke-width: 1; }
            .skills-polygon { fill: rgb(42, 133, 223, 0.6); stroke: rgb(125, 241, 255); stroke-width: 2; }
            .skill-point { fill: rgb(125, 241, 255); }
            .level-text { font-size: 11px; fill: #999; text-anchor: middle; }
          `}</style>
        </defs>

        {levelPaths.map((path, i) => (
          <polygon key={`level-${i}`} points={path} className="level-line" />
        ))}

        {skills.map((_, i) => {
          const endpoint = getAxisEndpoint(i);
          return (
            <line
              key={`axis-${i}`}
              x1={centerX}
              y1={centerY}
              x2={endpoint.x}
              y2={endpoint.y}
              className="axis-line"
            />
          );
        })}

        <polygon points={skillsPath} className="skills-polygon" />

        {skills.map((skill, i) => {
          const coords = getCoordinates(i, skill.value);
          return (
            <circle
              key={`point-${i}`}
              cx={coords.x}
              cy={coords.y}
              r="4"
              className="skill-point"
            />
          );
        })}

        {skills.map((skill, i) => {
          const angle = angleSlice * i - Math.PI / 2;
          const labelDistance = i === 0 ? radius + 55 : radius + 35;
          const labelX = centerX + labelDistance * Math.cos(angle);
          const labelY = centerY + labelDistance * Math.sin(angle);
          const nameLines = skill.name.split("\n").length;
          const valueBgY = labelY + (nameLines - 1) * 8 + 36;

          return (
            <g key={`label-group-${i}`}>
              <rect
                x={labelX - 16}
                y={valueBgY - 12}
                width="32"
                height="24"
                fill="rgb(42, 133, 223)"
                rx="4"
              />
              <text
                key={`label-${i}`}
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="13"
                fill="#fff"
                fontWeight="600"
              >
                {skill.name.split("\n").map((line, j) => (
                  <tspan key={j} x={labelX} dy={j === 0 ? 0 : 16}>
                    {line}
                  </tspan>
                ))}
              </text>
              <text
                x={labelX}
                y={valueBgY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="#fff"
                fontWeight="bold"
              >
                {skill.value.toFixed(1)}
              </text>
            </g>
          );
        })}

        <circle cx={centerX} cy={centerY} r="3" fill="#999" />
      </svg>
    </div>
  );
}
