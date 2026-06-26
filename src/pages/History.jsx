import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import historyData from "../historyData";
import imageTeam from "../assets/Image/equip.png";
import Header from "../components/Header";

export default function History({onLogin, profileName, scores, back, onLogout, selectedScenario = 0}) {

  return (
    <div>
    <Header profileName={profileName} onLogout={onLogout} />
            <main>
            <section className='history'>
              <button className="history__button-back" onClick={back}>⬅ Voltar</button>
            <div className='game__container-history'>
                <div className="game__timer">
                  <p className='game__text'>{historyData[selectedScenario].subtitle}</p>
                  <h2 className='game__title'>{historyData[selectedScenario].title}</h2>
                </div>
            </div>
            <div className='history__container'>
              <div className='history__description'>
                <p className='history__text'>{historyData[selectedScenario].text}</p>
              </div>
              <div className='history__media'>
                <img className='history__img' src={historyData[selectedScenario].image} alt="Imagem do Game" />
                <video className='history__video' controls>
                  <source src={historyData[selectedScenario].video} type="video/mp4" />
                </video>
              </div>
            </div>
            <button className='history__button' onClick={onLogin}>Avançar</button>
            </section>
            </main>
    </div>
  );
}
           