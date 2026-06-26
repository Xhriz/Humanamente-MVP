import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageTeam from "../assets/Image/equip.png";
import Header from "../components/Header";
import SkillsRadarChart from "../components/SkillsRadarChart";
import feedbackText from "../feedbackText";

export default function Feedback({onMenu, restart, profileName, scores, onLogout}) {
  const calculateAverageScore = () => {
    const scoresArray = [
      scores?.lideranca || 0,
      scores?.cooperacao || 0,
      scores?.comunicacao || 0,
      scores?.tomada_decisao || 0,
      scores?.consciencia_situacional || 0,
    ];
    const sum = scoresArray.reduce((acc, val) => acc + val, 0);
    return sum / 5;
  };

  const getTextIndex = () => {
    const average = calculateAverageScore();
    if (average >= 4) return 0;
    if (average >= 3) return 1;
    if (average >= 2) return 2;
    if (average >= 1) return 3;
    return 4;
  };

  const textIndex = getTextIndex();

  return (
    <div>
    <Header profileName={profileName} onLogout={onLogout} />
            <main className="feedback">
               <div className="feedback__header">
                <div>
                <h2 className="feedback__title">Feedback do Treinamento</h2>
                <p className="feedback__text">Avaliação das suas competências não técnicas.</p>
                </div>
                <div className="feedback__results">
                <button className="feedback__button">⭳ PDF</button>
                <button className="feedback__button" onClick={onMenu}>☰ Menu</button>
                </div>
               </div>
               <div className="feedback__report">
                <div className="feedback__report-block">
                  <h3 className="feedback__report-title">Relatório Operacional</h3>
                  <p className="feedback__report-description">Análise lógica baseada no seu desempenho</p>
                  <p className="feedback__report-text">{feedbackText[textIndex].text}</p>
                </div>
                <div className="feedback__block">
                <div className="feedback__skills">
                  <h3 className="feedback__skills-title">Indicadores Não Técnicos</h3>
                  <p className="feedback__skills-text">Resultados consolidados</p>
                  <SkillsRadarChart scores={scores}/>
                </div>
                <button className="feedback__restart" onClick={restart}>Reiniciar Simulação</button>
               </div>
               </div>
            </main>
    </div>
  );
}