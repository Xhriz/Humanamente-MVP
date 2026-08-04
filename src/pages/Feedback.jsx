import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageTeam from "../assets/Image/equip.png";
import Header from "../components/Header";
import SkillsRadarChart from "../components/SkillsRadarChart";
import feedbackText from "../feedbackText";
import { useState, useEffect } from "react";
import { useScrollTop } from "../hooks/useScrollTop";

export default function Feedback({onMenu, restart, profileName, scores, selfAssessmentScores, onLogout, onHome}) {
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
    if (average >= 4) return 0;
    if (average >= 3) return 1;
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
  <h2 className="feedback__table-title">Competências Não Técnicas</h2>
  <p className="feedback__table-subtitle">A avaliação do programa funciona com base nessa tabela, as categorias são implementadas nas decisões do cenário.</p>
<table className="feedback__table">
  <thead>
    <tr>
      <th className="selfassessment__table-title" colSpan={4}>
      </th>
    </tr>
    <tr>
      <th className="selfassessment__table-header">Princípios/Categorias</th>
      <th className="selfassessment__table-header">Elementos</th>
      <th className="selfassessment__table-header">Comportamentos</th>
    </tr>
  </thead>

  <tbody>
    {/* COMUNICAÇÃO (1 linha) */}
    <tr>
      <td className="selfassessment__table-cell">COMUNICAÇÃO</td>
      <td className="selfassessment__table-cell">MENSAGEM</td>
      <td className="selfassessment__table-cell">
        Estabelecer um canal de comunicação aberto e participativo.
        <br />
        Encorajar que membros da equipe compartilhem as informações.
      </td> 
    </tr>

    {/* COOPERAÇÃO/TRABALHO EM EQUIPE (3 linhas) */}
    <tr>
      <td className="selfassessment__table-cell" rowSpan={3}>
        COOPERAÇÃO/TRABALHO EM EQUIPE
      </td>
      <td className="selfassessment__table-cell">INTERAÇÃO</td>
      <td className="selfassessment__table-cell">
        Levar em consideração sugestões dos outros mesmo que você não concorde.
        <br />
        Levar em consideração a condição dos outros.
        <br />
        Oferecer um feedback apropriado.
      </td>
    </tr>
    <tr>
      <td className="selfassessment__table-cell">APOIO À EQUIPE</td>
      <td className="selfassessment__table-cell">
        Colaborar com a equipe em situações de necessidade, mantendo o foco na tarefa.
        <br />
        Fornecer à equipe todo suporte logístico e operacional para a realização da tarefa.
        <br />
        Oferecer ajuda.
      </td>
    </tr>
    <tr>
      <td className="selfassessment__table-cell">RESOLUÇÃO DE CONFLITOS</td>
      <td className="selfassessment__table-cell">
        Manter a calma nos conflitos.
        <br />
        Sugerir soluções ao conflito.
        <br />
        Concentrar-se no que é certo e não em quem está certo.
      </td>
    </tr>

    {/* LIDERANÇA E HABILIDADES GERENCIAIS (4 linhas) */}
    <tr>
      <td className="selfassessment__table-cell" rowSpan={4}>
        LIDERANÇA E HABILIDADES GERENCIAIS
      </td>
      <td className="selfassessment__table-cell">USO DE AUTORIDADE E ASSERTIVIDADE</td>
      <td className="selfassessment__table-cell">
        Posicionamento no papel de líder.
        <br />
        Influenciar a equipe para que a tarefa tenha sucesso.
        <br />
        Exercer o comando quando a situação exigir.
        <br />
        Ter iniciativa para garantir que a tarefa seja atingida com sucesso.
        <br />
        Motivar o grupo pelo reconhecimento e pela supervisão.
      </td>
    </tr>
    <tr>
      <td className="selfassessment__table-cell">OFERECER E MANTER PADRÕES</td>
      <td className="selfassessment__table-cell">
        Elaborar procedimentos operacionais padronizados.
        <br />
        Garantir que os procedimentos padrões sejam seguidos.
        <br />
        Interferir em caso de desvio.
      </td>
    </tr>
    <tr>
      <td className="selfassessment__table-cell">PLANEJAMENTO E COORDENAÇÃO</td>
      <td className="selfassessment__table-cell">
        Envolver os elementos do grupo de trabalho no planejamento e na consecução da tarefa.
        <br />
        Definir claramente as intenções e os objetivos.
      </td>
    </tr>
    <tr>
      <td className="selfassessment__table-cell">GERENCIAMENTO DA CARGA DE TRABALHO</td>
      <td className="selfassessment__table-cell">
        Distribuir as atividades entre a equipe.
        <br />
        Monitorar o trabalho e corrigir apropriadamente.
        <br />
        Priorizar atividades operacionais secundárias para a obtenção de recursos suficientes para as atividades principais.
        <br />
        Reservar tempo suficiente para a realização da atividade.
      </td>
    </tr>

    {/* CONSCIÊNCIA SITUACIONAL (3 linhas) */}
    <tr>
      <td className="selfassessment__table-cell" rowSpan={3}>
        CONSCIÊNCIA SITUACIONAL
      </td>
      <td className="selfassessment__table-cell">MONITORAMENTO</td>
      <td className="selfassessment__table-cell">
        Monitorar os sistemas que influenciam a operação.
        <br />
        Ter conhecimento das entradas e das mudanças para os sistemas.
      </td>
    </tr>
    <tr>
      <td className="selfassessment__table-cell">CONSCIÊNCIA DO AMBIENTE EXTERNO</td>
      <td className="selfassessment__table-cell">
        Obter informações sobre como o ambiente externo pode interferir no trabalho.
        <br />
        Dividir informações sobre o ambiente com os demais.
      </td>
    </tr>
    <tr>
      <td className="selfassessment__table-cell">PERCEPÇÃO/COMPREENSÃO/PROJEÇÃO</td>
      <td className="selfassessment__table-cell">
        Perceber e compreender os problemas possíveis ou futuros.
        <br />
        Projetar as consequências.
      </td>
    </tr>

    {/* TOMADA DE DECISÃO (3 linhas) */}
    <tr>
      <td className="selfassessment__table-cell" rowSpan={3}>
        TOMADA DE DECISÃO
      </td>
      <td className="selfassessment__table-cell">DEFINIÇÃO E DIAGNÓSTICO DO PROBLEMA</td>
      <td className="selfassessment__table-cell">
        Buscar informações e identificar o problema.
        <br />
        Rever com a equipe os fatores causais do problema.
      </td>
    </tr>
    <tr>
      <td className="selfassessment__table-cell">PRODUÇÃO DE OPÇÕES</td>
      <td className="selfassessment__table-cell">
        Indicar o curso de ação.
        <br />
        Estabelecer curso alternativo de ação.
        <br />
        Perguntar à equipe por opções.
        <br />
        Confirmar curso de ação escolhido.
      </td>
    </tr>
    <tr>
      <td className="selfassessment__table-cell">AVALIAÇÃO DO RISCO</td>
      <td className="selfassessment__table-cell">
        Avaliação dos riscos acerca dos cursos de ação.
        <br />
        Avaliação dos riscos acerca dos cursos de ação alternativos.
      </td>
    </tr>
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