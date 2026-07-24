import { useState } from 'react';
import Header from '../components/Header';
import icon from '../assets/Image/info.png';

export default function SelfAssessment({ profileName, onLogout, onMenu, onFeedback }) {
  const [responses, setResponses] = useState({});
  const [currentSection, setCurrentSection] = useState(0);

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const sections = [
    {
      name: 'Comunicação',
      questions: [
        '1- Nossa equipe estabeleceu um canal de comunicação aberto e participativo durante o treinamento.',
        '2- Nossa equipe incentivou que todos compartilhassem informações relevantes sobre a atividade.'
      ]
    },
    {
      name: 'Cooperação/Trabalho em Equipe',
      questions: [
        '3- Nossa equipe levou em consideração as sugestões dos colegas, mesmo quando havia opiniões divergentes.',
        '4- Nossa equipe considerou as condições e limitações dos membros ao distribuir tarefas ou cobrar resultados.',
        '5- Nossa equipe ofereceu feedback apropriado (claro, respeitoso e útil) entre os membros durante o treinamento.',
        '6- Nossa equipe colaborou em situações de necessidade, mantendo o foco na tarefa principal.',
        '7- Nossa equipe ofereceu suporte logístico e operacional para que as tarefas fossem realizadas.',
        '8- Nossa equipe se colocou à disposição para ajudar membros que apresentaram dificuldades.'
      ]
    },
    {
      name: 'Liderança/Habilidades Gerenciais',
      questions: [
        '9- Nossa equipe manteve a calma quando surgiram conflitos ou divergências.',
        '10- Nossa equipe buscou soluções construtivas para os conflitos em vez de alimentar discussões.',
        '11- Nossa equipe focou no que era certo para a tarefa/segurança, e não em quem estava certo na discussão.',
        '12- Nossa equipe assumiu a liderança quando necessário, sem atitudes autoritárias.',
        '13- Nossa equipe influenciou positivamente o grupo para que as tarefas tivessem sucesso.',
        '14- Nossa equipe exerceu comando de forma adequada à situação (nem omissa, nem excessiva).',
        '15- Nossa equipe tomou decisões para garantir que as tarefas fossem atingidas com sucesso.',
        '16- Nossa equipe contribuiu para que o grupo se sentisse reconhecido e valorizado pela supervisão.',
        '17- Nossa equipe ajudou a elaborar e/ou seguir procedimentos operacionais padronizados.',
        '18- Nossa equipe garantiu que os procedimentos e padrões estabelecidos fossem seguidos.',
        '19- Nossa equipe interveio quando percebeu desvios em relação aos padrões e procedimentos.',
        '20- Nossa equipe envolveu os membros no planejamento e na execução das tarefas.',
        '21- Nossa equipe definiu claramente as intenções, objetivos e prioridades da atividade.',
        '22- Nossa equipe distribuiu as atividades de forma equilibrada entre os membros.',
        '23- Nossa equipe monitorou se o trabalho estava sendo realizado de forma apropriada.',
        '24- Nossa equipe priorizou atividades secundárias para garantir recursos suficientes às atividades principais.',
        '25- Nossa equipe reservou tempo suficiente para a realização adequada das atividades.',
      ]
    },
    {
      name: 'Consciência Situacional',
      questions: [
        '26- Nossa equipe monitorou os sistemas/processos que influenciam a operação durante o treinamento.',
        '27- Nossa equipe buscou conhecimento sobre entradas, mudanças e impactos desses sistemas na atividade.',
        '28- Nossa equipe buscou informações sobre como o ambiente externo poderia interferir no trabalho.',
        '29- Nossa equipe compartilhou entre os membros informações relevantes sobre o ambiente externo.',
        '30- Nossa equipe percebeu e compreendeu problemas possíveis ou futuros relacionados à atividade.',
        '31- Nossa equipe procurou projetar as consequências das ações e decisões tomadas.'
      ]
    },
    {
      name: 'Tomada de Decisão',
      questions: [
        '32- Nossa equipe buscou informações suficientes para identificar corretamente os problemas.',
        '33- Nossa equipe revisou em conjunto os fatores que causaram ou poderiam causar o problema.',
        '34- Nossa equipe indicou um curso de ação claro para lidar com cada situação.',
        '35- Nossa equipe apresentou alternativas de ação e discutiu essas opções entre os membros.',
        '36- Nossa equipe ouviu sugestões dos membros antes de definir o curso de ação.',
        '37- Nossa equipe confirmou o curso de ação escolhido, garantindo entendimento comum entre todos',
        '38- Nossa equipe avaliou os riscos dos cursos de ação selecionados antes de executá‑los.',
        '39- Nossa equipe comparou os riscos das opções alternativas antes de escolher uma delas.'
      ]
    }
  ];

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const currentSectionData = sections[currentSection];

  const allQuestionsAnswered = () => {
    return sections.every((section, sectionIdx) =>
      section.questions.every((_, qIdx) =>
        responses[`${sectionIdx}-${qIdx}`] !== undefined
      )
    );
  };

  const calculateSectionAverages = () => {
    const averages = {};
    sections.forEach((section, sectionIdx) => {
      const sectionResponses = section.questions.map((_, qIdx) => {
        return responses[`${sectionIdx}-${qIdx}`] || 0;
      });

      const sum = sectionResponses.reduce((acc, val) => acc + val, 0);
      const average = sum / sectionResponses.length;

      if (section.name.includes('Comunicação')) {
        averages.comunicacao = average;
      } else if (section.name.includes('Cooperação')) {
        averages.cooperacao = average;
      } else if (section.name.includes('Liderança')) {
        averages.lideranca = average;
      } else if (section.name.includes('Consciência')) {
        averages.consciencia_situacional = average;
      } else if (section.name.includes('Tomada')) {
        averages.tomada_decisao = average;
      }
    });
    return averages;
  };

  return (
    <>
      <Header profileName={profileName} onLogout={onLogout} />
      <main className='selfassessment'>
        <div className='selfassessment__header'>
          <div className='selfassessment__text'>
            <h1 className='selfassessment__title'>Autoavaliação da Equipe</h1>
            <p className='selfassessment__description'>A autoavaliação é uma ferramenta valiosa para refletir sobre suas habilidades e identificar áreas de melhoria.</p>
          </div>
          <button className='game__button' onClick={onMenu}>☰ Menu</button>
        </div>

        <div className="selfassessment__content">
          <div className='selfassessment__instructions'>
            <div className='selfassessment__instructions-box'>
              <div className='selfassessment__instructions-header'>
              <img src={icon} className='selfassessment__instructions-icon'/>
              <h2 className='selfassessment__instructions-title'>Instruções</h2>
              </div>
              <p className='selfassessment__instructions-text'>
                Responda este formulário com sinceridade e foco na melhoria contínua.<br /><br />
                Para cada pergunta, utilize a escala de 1 a 5 de acordo com a tabela ao lado com base no comportamento da equipe durante o treinamento:
              </p>
              <p className='selfassessment__instructions-text'>
                <strong>1 = Muito inadequado</strong> <br></br> <strong>2 = Inadequado</strong> <br></br> <strong>3 = Aceitável</strong> <br></br> <strong>4 = Bom</strong> <br></br> <strong>5 = Muito bom</strong>
              </p>
              <p className='selfassessment__instructions-text'>Você deve preencher todas as perguntas para continuar.</p>
            </div>
          </div>

          <div>
           <div className="selfassessment__instructions-table">
              <table className="selfassessment__table">
                <thead>
                  <tr>
                    <th className="selfassessment__table-header">Muito inadequado</th>
                    <th className="selfassessment__table-header">Inadequado</th>
                    <th className="selfassessment__table-header">Aceitável</th>
                    <th className="selfassessment__table-header">Bom</th>
                    <th className="selfassessment__table-header">Muito bom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="selfassessment__table-cell">1</td>
                    <td className="selfassessment__table-cell">2</td>
                    <td className="selfassessment__table-cell">3</td>
                    <td className="selfassessment__table-cell">4</td>
                    <td className="selfassessment__table-cell">5</td>
                  </tr>
                  <tr>
                    <td className="selfassessment__table-cell">O comportamento observado afeta diretamente a segurança operacional.</td>
                    <td className="selfassessment__table-cell">O comportamento observado, em outras circunstâncias, poderia ter afetado a segurança operacional.</td>
                    <td className="selfassessment__table-cell">O comportamento observado não afeta a segurança operacional, mas precisa melhorar.</td>
                    <td className="selfassessment__table-cell">O comportamento observado melhora a segurança operacional.</td>
                    <td className="selfassessment__table-cell">O comportamento observado é um exemplo a ser seguido para a segurança operacional.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          <div className='selfassessment__form-container'>
            <h2 className='selfassessment__form-section-title'>Formulário de Autoavaliação</h2>
            <div className='selfassessment__carousel-header'>
              <span className='selfassessment__section-counter'>
                {currentSection + 1} / {sections.length}
              </span>
              <h2 className='selfassessment__form-title'>{currentSectionData.name}</h2>
            </div>

            <form className='selfassessment__form'>
              <div className='selfassessment__form-section'>
                {currentSectionData.questions.map((question, qIdx) => {
                  const questionId = `${currentSection}-${qIdx}`;
                  return (
                    <div key={questionId}>
                      <p className='selfassessment__form-ask'>{question}</p>
                      <div className='selfassessment__form-options-container'>
                        <p className='selfassessment__form-caption'>Muito inadequado</p>
                        {[1, 2, 3, 4, 5].map(value => (
                          <label key={value} className='selfassessment__form-option-label'>
                            <input
                              type='radio'
                              className='selfassessment__form-options'
                              name={questionId}
                              value={value}
                              checked={responses[questionId] === value}
                              onChange={() => handleResponse(questionId, value)}
                            />
                            <span className='selfassessment__form-option-value'>{value}</span>
                          </label>
                        ))}
                        <p className='selfassessment__form-caption'>Muito bom</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </form>

            <div className='selfassessment__carousel-controls'>
              <button
                className='selfassessment__carousel-btn selfassessment__carousel-btn--prev'
                onClick={handlePrev}
                disabled={currentSection === 0}
              >
                ← Anterior
              </button>

              <div className='selfassessment__dots'>
                {sections.map((_, idx) => (
                  <span
                    key={idx}
                    className={`selfassessment__dot ${idx === currentSection ? 'selfassessment__dot--active' : ''}`}
                    onClick={() => setCurrentSection(idx)}
                  />
                ))}
              </div>

              <button
                className='selfassessment__carousel-btn selfassessment__carousel-btn--next'
                onClick={handleNext}
                disabled={currentSection === sections.length - 1}
              >
                Próximo →
              </button>
            </div>
          </div>
          </div>
        </div>

        <button
          type='submit'
          onClick={() => {
            const averages = calculateSectionAverages();
            localStorage.setItem('selfassessment__scores', JSON.stringify(averages));
            onFeedback();
          }}
          className='selfassessment__button'
          disabled={!allQuestionsAnswered()}
        >
          Continuar
        </button>
      </main>
    </>
  );
}