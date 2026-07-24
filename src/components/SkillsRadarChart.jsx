export default function SkillsRadarChart({ scores, selfAssessmentScores }) {
  const skills = [
    { name: "Consciência\nsituacional", value: scores?.consciencia_situacional || 0, selfAssessmentValue: selfAssessmentScores?.consciencia_situacional || 0 },
    { name: "Tomada de\ndecisão", value: scores?.tomada_decisao || 0, selfAssessmentValue: selfAssessmentScores?.tomada_decisao || 0 },
    { name: "Cooperação /\ntrabalho em equipe", value: scores?.cooperacao || 0, selfAssessmentValue: selfAssessmentScores?.cooperacao || 0 },
    { name: "Liderança /\nhabilidades gerenciais", value: scores?.lideranca || 0, selfAssessmentValue: selfAssessmentScores?.lideranca || 0 },
    { name: "Comunicação", value: scores?.comunicacao || 0, selfAssessmentValue: selfAssessmentScores?.comunicacao || 0 },
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

  const selfAssessmentPath = selfAssessmentScores ? skills
    .map((skill, i) => {
      const coords = getCoordinates(i, skill.selfAssessmentValue);
      return `${coords.x},${coords.y}`;
    })
    .join(" ") : null;

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
      {selfAssessmentScores && (
        <div className="skills-radar-legend">
          <div className="legend-item">
            <div className="legend-color" style={{backgroundColor: 'rgb(42, 133, 223)'}}></div>
            <span>Avaliação do Game</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{backgroundColor: 'rgb(255, 193, 7)'}}></div>
            <span>Autoavaliação da Equipe</span>
          </div>
        </div>
      )}
      <svg width="900" height="900" viewBox="-50 -50 500 500" style={{maxWidth: '100%', height: 'auto', marginTop: '-35px'}}>
        <defs>
          <style>{`
            .level-line { stroke: #e0e0e0; stroke-width: 1; fill: none; }
            .axis-line { stroke: #d0d0d0; stroke-width: 1; }
            .skills-polygon { fill: rgb(42, 133, 223, 0.6); stroke: rgb(125, 241, 255); stroke-width: 2; }
            .self-assessment-polygon { fill: rgb(255, 193, 7, 0.5); stroke: rgb(255, 193, 7); stroke-width: 2; }
            .skill-point { fill: rgb(125, 241, 255); }
            .self-assessment-point { fill: rgb(255, 193, 7); }
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

        {selfAssessmentPath && <polygon points={selfAssessmentPath} className="self-assessment-polygon" />}

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

        {selfAssessmentScores && skills.map((skill, i) => {
          const coords = getCoordinates(i, skill.selfAssessmentValue);
          return (
            <circle
              key={`self-assessment-point-${i}`}
              cx={coords.x}
              cy={coords.y}
              r="4"
              className="self-assessment-point"
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
                height={selfAssessmentScores ? "25" : "24"}
                fill="rgb(42, 133, 223)"
                rx="4"
              />
              {selfAssessmentScores && <rect
                x={labelX - 16}
                y={valueBgY + 28}
                width="32"
                height="25"
                fill="rgb(255, 193, 7)"
                rx="4"
              />}
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
              {selfAssessmentScores && <text
                x={labelX}
                y={valueBgY + 40}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="#333"
                fontWeight="bold"
              >
                {skill.selfAssessmentValue.toFixed(1)}
              </text>}
            </g>
          );
        })}

        <circle cx={centerX} cy={centerY} r="3" fill="#999" />
      </svg>
    </div>
  );
}
