import imageMenu from "../assets/Image/h2s.png";
import imageMenu2 from  "../assets/Image/descoque.png";
import imageMenu3 from  "../assets/Image/degradacao.png";
import imageMenu4 from  "../assets/Image/parada.png";
import Header from "../components/Header";
import SkillsRadarChart from "../components/SkillsRadarChart";
import { useState, useEffect } from "react";
import { useScrollTop } from "../hooks/useScrollTop";

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

export default function Menu({ onLogin, profileName, scores, onLogout, onInstructions, selfAssessmentScores, onHome}) {
  useScrollTop();
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

  return (

    <>
        <Header profileName={profileName} onLogout={onLogout} onHome={onHome} />

        <main>
        <section className='menu'>
          <div className='menu__collumn'>
          <div className='menu__skills'>
           <h2 className='menu__title'>Perfil de Habilidades da Equipe</h2>
           <p className='menu__subtitle'>Evolução de suas competências</p>
           <SkillsRadarChart scores={scores} selfAssessmentScores={selfAssessmentScores}/>
          </div>
          <div className='menu__instructions'>
                  <h2 className='menu__instructions-title'>Como Funciona</h2>
                  <p className='menu__instructions-text'>1. Leia o contexto do cenário.</p>
                  <p className='menu__instructions-text'>2. Selecione suas opções.</p>
                  <p className='menu__instructions-text'>3. Veja os desdobramentos.</p>
                  <p className='menu__instructions-text'>4. Faça autoavaliação da equipe.</p>
                  <p className='menu__instructions-text'>5. Receba feedback sobre suas decisões.</p>
          </div>
          <button className='menu__instructions-button' onClick={onInstructions}>Conceitos</button>
          <h3 className='menu__participants-title'>Participantes</h3>
          <div className='menu__table-wrapper'>
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
          <div className= 'cenarios'>
             <h2 className='cenario__title'>Cenários</h2>
             <p className='cenario__description'>Treine suas competências com base em cenários que simulam uma operação real da unidade</p>
          <div className='cenario__structure'>
              <h3 className="cenario__structure-title">Estrutura dos Cenários</h3>
              <p className="cenario__structure-text">1. Estrutura dos Cenários: A estrutura do conjunto de eventos suporta o desenvolvimento tanto de cenários com eventos simples ou complexos.<br></br>  <br></br>

2. Eventos simples: não têm maiores consequências na condução operação, uma vez diagnosticados e corrigidos.<br></br><br></br>

3. Eventos Complexos: Eventos complexos têm consequências contínuas que devem ser tratadas durante a operação e não podem ser resolvidos simplesmente selecionando e executando uma lista de verificação.<br></br><br></br>

4. Cenário baseado em conjunto de eventos exigem ações coordenadas de todos os membros da equipe para conclusão bem-sucedida. Ele nunca poderá ser totalmente resolvido, mas, em vez disso, deverá ser gerenciado nas várias fases da operação. O evento complexo não tem, necessariamente, uma única solução. Ao contrário, ele poderá ter várias soluções possíveis e razoáveis. Assim, o evento bem projetado promove o gerenciamento de uma situação complexa.</p>
            </div>
          <div className='cenario__opitions'>
          <div className='menu__fase'>
            <div className='menu__fase-card'>
            <img className='menu__fase-img' src={imageMenu} alt="Iniciante" />
            </div>
            <div className='menu__fase-info'>
                <p className='menu__fase-nivel'>Complexo</p>
                <h2 className='menu__fase-title'>Vazamento e Alarme de  H₂S</h2>
                <p className='menu__fase-description'>Um alarme de gás tóxico é detectado nas proximidades da B‑98508A. A equipe aguarda sua orientação. Gerencie riscos, comunique com clareza e mantenha o controle sob pressão.</p>

                <button className='menu__fase-button' onClick={() => onLogin(0)}>Iniciar Treinamento</button>
            </div>

          </div>
           <div className='menu__fase'>
            <div className='menu__fase-card'>
            <img className='menu__fase-img' src={imageMenu2} alt="Iniciante" />
            </div>
            <div className='menu__fase-info'>
                <p className='menu__fase-nivel'>Complexo</p>
                <h2 className='menu__fase-title'>Parada de Manutenção Programada</h2>
                <p className='menu__fase-description'>A unidade está operando com carga total e requer redução gradual para dar início à parada de manutenção. Parâmetros Iniciais Normais.</p>
                <button className='menu__fase-button' onClick={() => onLogin(1)}>Iniciar Treinamento</button>
            </div>
          </div>

          <div className='menu__fase'>
            <div className='menu__fase-card'>
            <img className='menu__fase-img' src={imageMenu3} alt="Iniciante" />
            </div>
            <div className='menu__fase-info'>
                <p className='menu__fase-nivel'>Complexo</p>
                <h2 className='menu__fase-title'>Degradação Térmica de uma Linha de Troca de Calor</h2>
                <p className='menu__fase-description'>Durante a operação de uma planta de processamento de gás natural, uma das linhas de troca térmica passa a operar sob condições anormais de temperatura. Inicialmente, os desvios observados parecem pequenos e permanecem dentro dos limites.</p>
                <button className='menu__fase-button' onClick={() => onLogin(2)}>Iniciar Treinamento</button>
            </div>
          </div>

          <div className='menu__fase'>
            <div className='menu__fase-card'>
            <img className='menu__fase-img' src={imageMenu4} alt="Iniciante" />
            </div>
            <div className='menu__fase-info'>
                <p className='menu__fase-nivel'>Complexo</p>
                <h2 className='menu__fase-title'>Planejamento e Execução de uma Parada de Manutenção</h2>
                <p className='menu__fase-description'>Durante a preparação da Parada de Manutenção, é identificada tardiamente a necessidade de serviços em um equipamento crítico fora do escopo congelado. A equipe aguarda sua orientação. Reavalie riscos e mantenha o controle sob pressão.</p>
                <button className='menu__fase-button' onClick={() => onLogin(3)}>Iniciar Treinamento</button>
            </div>
          </div>

          </div>
          </div>

        </section>
        </main>

    </>
  );
}