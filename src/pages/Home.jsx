import image1 from "../assets/Image/2.png";
import image2 from "../assets/Image/ref.png";
import image3 from "../assets/Image/1.png";
import image4 from "../assets/Image/3.png";
import image5 from "../assets/Image/4.png";
import image6 from "../assets/Image/5.png";
import image7 from "../assets/Image/6.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function CardItem({ image, title, description, delay }) {
  const ref = useScrollAnimation(delay);
  return (
    <li className='cards__item' ref={ref}>
      <img className='cards__img' src={image} alt={title} />
      <h3 className='cards__subtitle'>{title}</h3>
      <p className='cards__description'>{description}</p>
    </li>
  );
}

function SubCardItem({ title, children, delay }) {
  const ref = useScrollAnimation(delay);
  return (
    <li className='cards__item cards__item--sub' ref={ref}>
      <h3 className='cards__subtitle-sub'>{title}</h3>
      <ul>{children}</ul>
    </li>
  );
}

export default function Home({ onStartGame, onLogin, scrolled }) {
  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className='header__logo'>
          <img className='header__img' src={image1} alt="Logo" />
          <p className='header__name'>Humanamente</p>
        </div>

        <button className='header__button' onClick={onStartGame}>
          Iniciar Treinamento
        </button>
      </header>

      <main>

        <section className='description'>
          <img className='description__img' src={image2} alt="imagem da refinaria" />
          <div className='description__content'>
            <p className='description__text'><span>⚡</span>Desenvolva Consciência Operacional</p>
            <h1 className='description__title'>
              
              Treine suas Habilidades <span>Não Técnicas</span>
            </h1>
            <p className='description__content-text'>
              Assuma papéis operacionais em simuladores reais. Tome decisões sob pressão e veja o impacto imediato na cultura de segurança e gestão de riscos.
            </p>
            <button className='description__button' onClick={onStartGame}>
              Iniciar Treinamento →
            </button>
          </div>
        </section>

        <section className='cards'>
          
          <div className='cards__header'>
            <h2 className='cards__title'>Pilares do Treinamento Humanamente - Fase 2</h2>
            <p className='cards__text'>
              Nossa metodologia foca no desenvolvimento das habilidades fundamentais para a excelência operacional e segurança industrial.
            </p>
          </div>

          <div className='cards__container'>
            <ul className='cards__list'>
              <CardItem
                image={image3}
                title="Consciênia Situacional"
                description="Avalie perigos em tempo real e tome decisões que preservam a integridade física e operacional."
                delay={0}
              />
              <CardItem
                image={image4}
                title="Tomada de Decisão"
                description="Processos mentais estruturados para agir rapidamente em situações críticas e inesperadas."
                delay={100}
              />
              <CardItem
                image={image5}
                title="Cooperação / Trabalho em Equipe"
                description="Fortaleça a cooperação e a comunicação entre turnos para evitar falhas sistêmicas."
                delay={200}
              />
              <CardItem
                image={image6}
                title="Liderança / Habilidades Gerenciais"
                description="Exerça influência positiva e coordene ações eficazes durante emergências operacionais."
                delay={300}
              />
            </ul>
          </div>
            
          <div className="cards__background">
           <div className='cards__container'>
            <h2 className='cards__title'>Consciênia Situacional</h2>
            <ul className='cards__list'>
              <SubCardItem title="Monitoramento" delay={0}>
                <li className='cards__description-sub'>Monitorar os sistemas que influenciam a operação.</li>
                <li className='cards__description-sub'>Ter conhecimentos de mudanças nos sistemas.</li>
              </SubCardItem>
              <SubCardItem title="Consciência do Ambiente Externo" delay={100}>
                <li className='cards__description-sub'>Obter informações sobre como o ambiente externo pode interferir no trabalho.</li>
                <li className='cards__description-sub'>Dividir informações sobre o ambiente com os demais.</li>
              </SubCardItem>
              <SubCardItem title="Percepção / Compreensão / Projeção" delay={200}>
                <li className='cards__description-sub'>Identificar problemas possíveis ou futuros.</li>
                <li className='cards__description-sub'>Compreender as implicações desses problemas.</li>
                <li className='cards__description-sub'>Projetar cenários e antecipar consequências.</li>
              </SubCardItem>
            </ul>
            </div>

            <div className='cards__container'>
            <h2 className='cards__title'>Tomada de Decisão</h2>
            <ul className='cards__list'>
              <SubCardItem title="Definição e Diagnóstico do Problema" delay={0}>
                <li className='cards__description-sub'>Buscar informações.</li>
                <li className='cards__description-sub'>Identificar o problema.</li>
                <li className='cards__description-sub'>Rever com a equipe os fatores causais do problema.</li>
              </SubCardItem>
              <SubCardItem title="Produção de Opções" delay={100}>
                <li className='cards__description-sub'>Indicar o curso de ação.</li>
                <li className='cards__description-sub'>Estabelecer curso de ação alternativo.</li>
                <li className='cards__description-sub'>Confirmar o curso de ação escolhido.</li>
              </SubCardItem>
              <SubCardItem title="Avaliação do Risco" delay={200}>
                <li className='cards__description-sub'>Avaliação dos riscos acerca do curso de ação escolhido.</li>
                <li className='cards__description-sub'>Avaliação dos riscos acerca do curso de ação alternativos.</li>
              </SubCardItem>
              <SubCardItem title="Revisão dos Resultados" delay={300}>
                <li className='cards__description-sub'>Checar o resultado em relação ao objetivo.</li>
              </SubCardItem>
            </ul>
            </div>

            <div className='cards__container'>
              <h2 className='cards__title'>Cooperação / Trabalho em Equipe</h2>
            <ul className='cards__list'>
              <SubCardItem title="Comunicação" delay={0}>
                <li className='cards__description-sub'>Estabelecer um canal de comunicação aberto e participativo.</li>
                <li className='cards__description-sub'>Encorajar que membros da equipe compartilhem as informações.</li>
              </SubCardItem>
              <SubCardItem title="Interação" delay={100}>
                <li className='cards__description-sub'>Levar em consideração sugestões dos outros mesmo que você não concorde.</li>
                <li className='cards__description-sub'>Levar em consideração a condição dos outros.</li>
                <li className='cards__description-sub'>Oferecer um feedback apropriado.</li>
              </SubCardItem>
              <SubCardItem title="Apoio à Equipe" delay={200}>
                <li className='cards__description-sub'>Colaborar com a equipe em situações de necessidade, mantendo o foco na tarefa e não na pessoa.</li>
                <li className='cards__description-sub'>Oferecer ajuda.</li>
              </SubCardItem>
              <SubCardItem title="Resolução de Conflitos" delay={300}>
                <li className='cards__description-sub'>Manter a calma nos conflitos.</li>
                <li className='cards__description-sub'>Sugerir soluções ao conflito.</li>
                <li className='cards__description-sub'>Concentrar-se no que é certo e não em quem está certo.</li>
              </SubCardItem>
            </ul>
            </div>

            <div className='cards__container'>
              <h2 className='cards__title'>Liderança / Habilidades Gerenciais</h2>
            <ul className='cards__list'>
              <SubCardItem title="Uso de Autoridade e Assertividade" delay={0}>
                <li className='cards__description-sub'>Posicionamento no papel de líder.</li>
                <li className='cards__description-sub'>Influenciar a equipe para que a tarefa tenha sucesso.</li>
                <li className='cards__description-sub'>Exercer o comando quando a situação exigir.</li>
                <li className='cards__description-sub'>Motivar o grupo pelo reconhecimento e pela supervisão.</li>
              </SubCardItem>
              <SubCardItem title="Oferecer e Manter Padrões" delay={100}>
                <li className='cards__description-sub'>Elaborar procedimentos operacionais padronizados.</li>
                <li className='cards__description-sub'>Garantir que os procedimentos padrões sejam seguidos.</li>
                <li className='cards__description-sub'>Interferir em caso de desvio.</li>
              </SubCardItem>
              <SubCardItem title="Planejamento e Coordenação" delay={200}>
                <li className='cards__description-sub'>Envolver os elementos do grupo de trabalho no planejamento e na construção da tarefa.</li>
                <li className='cards__description-sub'>Definir claramente as intenções e os objetivos.</li>
              </SubCardItem>
              <SubCardItem title="Gerenciamento da Carga de Trabalho" delay={300}>
                <li className='cards__description-sub'>Distribuir as atividades entre a equipe.</li>
                <li className='cards__description-sub'>Monitorar o trabalho e corrigir apropriadamente.</li>
                <li className='cards__description-sub'>Reservar tempo suficiente para a realização da atividade.</li>
              </SubCardItem>
            </ul>
            </div>
          </div>
        
        </section>
        </main>

        <footer className='footer'>
          <p className='footer__text'>&copy; 2026 Humanamente - Industrial Simulator. Todos os direitos reservados.</p>
        </footer>
      
    </>
  );
}