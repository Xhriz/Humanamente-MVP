import imageMenu from "../assets/Image/h2s.png";
import imageMenu2 from  "../assets/Image/descoque.png";
import Header from "../components/Header";
import SkillsRadarChart from "../components/SkillsRadarChart";

export default function Menu({ onLogin, profileName, scores, onLogout}) {
  return (

    <>
        <Header profileName={profileName} onLogout={onLogout} />

        <main>
        <section className='menu'>
           <div className='menu__collumn'>
          <div className='menu__skills'>
           <h2 className='menu__title'>Perfil de Habilidades da Equipe</h2>
           <p className='menu__subtitle'>Evolução de suas competências</p>
           <SkillsRadarChart scores={scores}/>
          </div>
          <div className='menu__instructions'>
                  <h2 className='menu__instructions-title'>Como Funciona</h2>
                  <p className='menu__instructions-text'>1. Leia ao briefing do cenário.</p>
                  <p className='menu__instructions-text'>2. Tome decisões sob pressão.</p>
                  <p className='menu__instructions-text'>3. Veja os desdobramentos.</p>
                  <p className='menu__instructions-text'>4. Receba feedback sobre suas escolhas.</p>
                </div>
                </div>
          <div className= 'cenarios'>
             <h2 className='cenario__title'>Cenários Disponíveis</h2>
             <p className='cenario__description'>Treine suas decisões com base em cenários reais da operação</p>
          <div className='cenario__opitions'>
          <div className='menu__fase'>
            <div className='menu__fase-card'>
            <img className='menu__fase-img' src={imageMenu} alt="Iniciante" />
            </div>
            <div className='menu__fase-info'>
                <p className='menu__fase-nivel'>Simples</p>
                <h2 className='menu__fase-title'>Vazamento e Alarme de  H₂S</h2>
                <p className='menu__fase-description'>Um alarme de gás tóxico é detectado nas proximidades da B‑98508A. A equipe aguarda sua orientação. Gerencie riscos, comunique com clareza e mantenha o controle sob pressão.</p>
                <div className='menu__fase-skill-container'>
                <p className='menu__fase-skill'>Comunicação</p>
                <p className='menu__fase-skill'>Consciência Situacional</p>
                <p className='menu__fase-skill'>Liderança</p>
                </div>
                <button className='menu__fase-button' onClick={() => onLogin(0)}>Iniciar Treinamento</button>
            </div>


          </div>
           <div className='menu__fase'>
            <div className='menu__fase-card'>
            <img className='menu__fase-img' src={imageMenu2} alt="Iniciante" />
            </div>
            <div className='menu__fase-info'>
                <p className='menu__fase-nivel'>Simples</p>
                <h2 className='menu__fase-title'>Parada de Manutenção Programada</h2>
                <p className='menu__fase-description'>A unidade está operando com carga total e requer redução gradual para dar início à parada de manutenção. Parâmetros Iniciais Normais.</p>
                <div className='menu__fase-skill-container'>
                <p className='menu__fase-skill'>Comunicação</p>
                <p className='menu__fase-skill'>Consciência Situacional</p>
                <p className='menu__fase-skill'>Liderança</p>
                </div>
                <button className='menu__fase-button' onClick={() => onLogin(1)}>Iniciar Treinamento</button>
            </div>
          </div>
          </div>
          </div>

        </section>
        </main>

    </>
  );
}