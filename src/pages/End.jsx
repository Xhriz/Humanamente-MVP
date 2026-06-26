import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import endData from "../endData";
import imageTeam from "../assets/Image/equip.png";
import Header from "../components/Header";
import SkillsRadarChart from "../components/SkillsRadarChart";

export default function End({onLogin, profileName, scores, selectedScenario, onLogout}) {
  const endContent = endData[selectedScenario] || endData[0];

  return (
    <div>
    <Header profileName={profileName} onLogout={onLogout} />
            <main>
            <section className='history'>
            <div className='game__container-history'>
                <div className="game__timer">
                  <p className='game__text'>{endContent.subtitle}</p>
                  <h2 className='game__title'>{endContent.title}</h2>
                </div>
            </div>
            <div className='history__container'>
              <div className='history__description'>
                <p className='history__text'>{endContent.text}</p>
              </div>
              <div className='history__media'>
                <img className='history__img' src={endContent.image} alt="Imagem do Game" />
                <video className='history__video' controls>
                  <source src={endContent.video} type="video/mp4" />
                </video>
              </div>
            </div>
            <button className='history__button' onClick={onLogin}>Finalizar</button>
            </section>
            </main>
    </div>
  );
}