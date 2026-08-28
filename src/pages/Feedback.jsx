import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageTeam from "../assets/Image/equip.png";
import Header from "../components/Header";
import SkillsRadarChart from "../components/SkillsRadarChart";
import feedbackText from "../feedbackText";
import { useState, useEffect } from "react";
import { useScrollTop } from "../hooks/useScrollTop";

const NOTECH_LABELS = {
  comunicacao: "Comunicação",
  cooperacao: "Cooperação",
  lideranca: "Liderança",
  tomada_decisao: "Tomada de Decisão",
  consciencia_situacional: "Consciência Situacional",
};

export default function Feedback({onMenu, restart, profileName, scores, choices, selfAssessmentScores, onLogout, onHome}) {
  useScrollTop();
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

  const ROLE_COMPETENCIES = {
  'Facilitador': 'Condução do cenário, observação do desempenho, mediação do debriefing',
  'Operador de Painel': 'Monitorar variáveis via painel, ajustar proporções, atuar em alarmes',
  'Operador de Área': 'Inspeções locais, verificação de válvulas, sensores e queimadores',
  'Coordenador de Turno': 'Coordenação geral, decisões estratégicas, gerenciamento e comunicação entre áreas',
  'Técnico de Manutenção': 'Suporte a equipamentos de controle e válvulas',
  'Equipe de Emergência': 'Atuação em caso de falha crítica ou parada de emergência',
  'Equipe de SMS': 'Garantir que as condições de segurança sejam mantidas, acionando os procedimentos de evacuação se necessário, e monitorando os limites de exposição a gases inflamáveis',
  'Gerência de SMS': 'Garantir que os riscos sejam identificados e mitigados, e que as permissões de trabalho atendam aos critérios de segurança',
  'Equipe de Planejamento': 'Responsável pela elaboração e emissão das permissões de trabalho para todas as atividades de manutenção',
  'Gerente Geral': 'Responsável pela direção estratégica da unidade, alinhando decisões da parada às metas de segurança, produção e custo',
  'Coordenador de Parada': 'Planejar e coordenar a execução global da parada, priorizando serviços, integrando áreas e gerindo o cronograma crítico',
  'Coordenador de Planejamento Operacional de Parada': 'Traduzir o escopo da parada em janelas operacionais, sequências de bloqueio e desbloqueio, e estratégias de retorno à operação',
  'Supervisor de Contratada': 'Acompanhar as equipes terceirizadas, garantir cumprimento de escopo, prazos e requisitos de segurança definidos pela contratante',
  'Supervisor de Turno': 'Liderar a equipe de turno na execução das atividades, distribuir tarefas, acompanhar riscos e manter comunicação com coordenação de parada',
  'Outros': 'Outro papel na equipe'
};


  const [participants, setParticipants] = useState([]);

  useEffect(() => {
      const stored = localStorage.getItem('login__participants');
      if (stored) {
        try {
          setParticipants(JSON.parse(stored));
        } catch (e) {
          console.error('Error parsing participants:', e);
          setParticipants([]);
        }
      }
    }, []);

  const getTextIndex = () => {
    const average = calculateAverageScore();
    if (average >= 4.3) return 0;
    if (average >= 3.5) return 1;
    if (average >= 2) return 2;
    if (average >= 1) return 3;
    return 4;
  };

  const handleDownloadPDF = async () => {
    try {
      await new Promise(resolve => {
        if (window.html2canvas && window.jspdf) {
          resolve();
        } else {
          let attempts = 0;
          const interval = setInterval(() => {
            attempts++;
            if (window.html2canvas && window.jspdf) {
              clearInterval(interval);
              resolve();
            }
            if (attempts > 30) {
              clearInterval(interval);
              throw new Error('Bibliotecas não carregaram');
            }
          }, 100);
        }
      });

      const feedbackElement = document.querySelector('.feedback');
      if (!feedbackElement) {
        throw new Error('Elemento feedback não encontrado');
      }

      const clone = feedbackElement.cloneNode(true);

      const buttons = clone.querySelectorAll('.feedback__button, .feedback__restart');
      buttons.forEach(btn => btn.remove());

      clone.style.position = 'fixed';
      clone.style.left = '-10000px';
      clone.style.top = '-10000px';
      clone.style.visibility = 'visible';
      document.body.appendChild(clone);

      await new Promise(resolve => setTimeout(resolve, 1000));

      const canvas = await window.html2canvas(clone, {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#090f1a',
        logging: false,
        imageTimeout: 15000,
        windowHeight: clone.scrollHeight + 300,
        windowWidth: clone.scrollWidth + 200
      });

      document.body.removeChild(clone);

      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.min(255, data[i] * 1);     
        data[i + 1] = Math.min(255, data[i + 1] * 1); 
        data[i + 2] = Math.min(255, data[i + 2] * 1); 
      }

      ctx.putImageData(imageData, 0, 0);

      const imgData = canvas.toDataURL('image/png', 1.0);
      const jsPDF = window.jspdf.jsPDF;
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - 10;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let currentPosition = 5;
      pdf.addImage(imgData, 'PNG', 5, currentPosition, imgWidth, imgHeight);

      let remainingHeight = imgHeight - pageHeight;
      while (remainingHeight > 0) {
        pdf.addPage();
        currentPosition -= pageHeight;
        pdf.addImage(imgData, 'PNG', 5, currentPosition, imgWidth, imgHeight);
        remainingHeight -= pageHeight;
      }

      pdf.save(`Feedback-${profileName}-${Date.now()}.pdf`);
      

    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert(`❌ Erro ao gerar PDF:\n${error.message}`);
    }
  };

  const textIndex = getTextIndex();

  return (
    <div>
    <Header profileName={profileName} onLogout={onLogout} onHome={onHome} />
            <main className="feedback">
               <div className="feedback__header">
                <div>
                <h2 className="feedback__title">Feedback do Treinamento</h2>
                <p className="feedback__text">Avaliação das suas competências não técnicas.</p>
                </div>
                <div className="feedback__results">
                <button className="feedback__button" onClick={handleDownloadPDF}>⭳ PDF</button>
                <button className="feedback__button" onClick={restart}>Reiniciar</button>
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
                  <SkillsRadarChart scores={scores} selfAssessmentScores={selfAssessmentScores}/>
                </div>
                </div>
               </div>
<div className="feedback__tables">
  <div className="feedback__table-competencies">
  <h2 className="feedback__table-title">Decisões do Cenário</h2>
  <p className="feedback__table-subtitle">Alternativas escolhidas em cada cenário, com a justificativa e as notas não técnicas correspondentes.</p>
<table className="feedback__table">
  <thead>
    <tr>
      <th className="selfassessment__table-header">Cenário</th>
      <th className="selfassessment__table-header">Alternativa Escolhida</th>
      <th className="selfassessment__table-header">Justificativa</th>
      <th className="selfassessment__table-header">Notas Não Técnicas</th>
    </tr>
  </thead>

  <tbody>
    {choices && choices.length > 0 ? (
      choices.map((choice, index) => (
        <tr key={index}>
          <td className="selfassessment__table-cell">{choice.titulo || `Cenário ${index + 1}`}</td>
          <td className="selfassessment__table-cell">{choice.texto}</td>
          <td className="selfassessment__table-cell">{choice.justificativa || "—"}</td>
          <td className="selfassessment__table-cell">
            {Object.entries(NOTECH_LABELS).map(([key, label], i, arr) => (
              <span key={key}>
                {label}: {choice.notech?.[key] ?? "—"}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td className="selfassessment__table-cell" colSpan={4}>Nenhuma decisão registrada neste cenário.</td>
      </tr>
    )}
  </tbody>
</table>
</div>

              <div className="feedback__table-equip">
               <h2 className="feedback__equip-name">Equipe {profileName}</h2>
               <table className="menu__table">
                <thead>
                  <tr>
                    <th className="menu__table-header">Participante</th>
                    <th className="menu__table-header">Função</th>
                    <th className="menu__table-header">Competência</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((participant, index) => (
                    <tr key={index}>
                      <td className="menu__table-cell">{participant.name}</td>
                      <td className="menu__table-cell">{participant.role}</td>
                      <td className="menu__table-cell">{ROLE_COMPETENCIES[participant.role] || ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              </div>
               <button className="feedback__restart" onClick={onMenu}>Terminar Treinamento</button>
            </main>
    </div>
  );
}