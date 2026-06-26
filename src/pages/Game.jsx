import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import CronoImg from "../assets/Image/cronometro.png";
import { useState, useEffect, useRef } from "react";
import gameData from "../gameData";
import imageTeam from "../assets/Image/equip.png";
import Header from "../components/Header";


let audioContext = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

const playTickSound = () => {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  } catch (e) {
    console.log('Som desativado');
  }
};

const playTimeUpSound = () => {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.setValueAtTime(600, ctx.currentTime);
    oscillator.frequency.linearRampToValueAtTime(400, ctx.currentTime + 0.3);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  } catch (e) {
    console.log('Som desativado');
  }
};

export default function Game({ profileName, onGameEnd, onLogout, selectedScenario = 0 }) {
  const [time, setTime] = useState(120);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [scores, setScores] = useState({
    comunicacao: 0,
    cooperacao: 0,
    lideranca: 0,
    tomada_decisao: 0,
    consciencia_situacional: 0,
  });
  const nextCalledRef = useRef(false);

  const cenarioKey = selectedScenario === 0 ? 'cenario1' : 'cenario2';
  const scenarioData = gameData[0][cenarioKey];
  const fase = scenarioData[scenarioIndex];

  const handleOptionClick = (optionIndex) => {
    const selectedOption = fase.opcoes[optionIndex];
    if (selectedOption.notech) {
      setScores(prev => ({
        comunicacao: prev.comunicacao + (selectedOption.notech.comunicacao || 0),
        cooperacao: prev.cooperacao + (selectedOption.notech.cooperacao || 0),
        lideranca: prev.lideranca + (selectedOption.notech.lideranca || 0),
        tomada_decisao: prev.tomada_decisao + (selectedOption.notech.tomada_decisao || 0),
        consciencia_situacional: prev.consciencia_situacional + (selectedOption.notech.consciencia_situacional || 0),
      }));
    }
    handleNextScenario();
  };

  const handleNextScenario = () => {
    if (scenarioIndex === scenarioData.length - 1) {
      const finalScores = {
        comunicacao: parseFloat((scores.comunicacao / scenarioData.length).toFixed(1)),
        cooperacao: parseFloat((scores.cooperacao / scenarioData.length).toFixed(1)),
        lideranca: parseFloat((scores.lideranca / scenarioData.length).toFixed(1)),
        tomada_decisao: parseFloat((scores.tomada_decisao / scenarioData.length).toFixed(1)),
        consciencia_situacional: parseFloat((scores.consciencia_situacional / scenarioData.length).toFixed(1)),
      };
      onGameEnd(finalScores);
      return;
    }
    setScenarioIndex(prev => {
      const nextIndex = prev + 1;
      if (nextIndex < scenarioData.length) {
        return nextIndex;
      }
      return prev;
    });
  };

  useEffect(() => {
    nextCalledRef.current = false;
    setTime(120);
  }, [scenarioIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 1 && !nextCalledRef.current) {
          nextCalledRef.current = true;
          clearInterval(timer);
          playTimeUpSound();
          setTimeout(() => {
            if (scenarioIndex === scenarioData.length - 1) {
              const finalScores = {
                comunicacao: parseFloat((scores.comunicacao / scenarioData.length).toFixed(1)),
                cooperacao: parseFloat((scores.cooperacao / scenarioData.length).toFixed(1)),
                lideranca: parseFloat((scores.lideranca / scenarioData.length).toFixed(1)),
                tomada_decisao: parseFloat((scores.tomada_decisao / scenarioData.length).toFixed(1)),
                consciencia_situacional: parseFloat((scores.consciencia_situacional / scenarioData.length).toFixed(1)),
              };
              onGameEnd(finalScores);
            } else {
              handleNextScenario();
            }
          }, 500);
          return 0;
        }
        if (prev <= 30 && prev > 0) playTickSound();
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [scenarioIndex, scores, onGameEnd]);  

  return (
    <div>
    <Header profileName={profileName} onLogout={onLogout} />
            <main>
              <section className='game'>
                <div className="game__scenario" key={scenarioIndex}>
                <div className='game__container'> 
                <div className="game__timer">
                  <p className='game__text'>{fase.subtitle}</p>
                  <h2 className='game__title'>{fase.title}</h2>
                </div>
                <div className="timer__circle">
                  <img className="timer__img" src={CronoImg} alt="Imagem do Cronômetro" />
                    <span className="timer__text">{time}s</span>
                  </div> 
                </div>
                <div className='game__description'>
                  <img className='game__description-img' src={fase.image} alt="Imagem do Game" />
                  <p className='game__description-text'>{fase.descricao}</p>
                </div>
                <div className='game__options'>
                  <button className='game__option' onClick={() => handleOptionClick(0)}>{fase.opcoes[0].texto}</button>
                  <button className='game__option' onClick={() => handleOptionClick(1)}>{fase.opcoes[1].texto}</button>
                  <button className='game__option' onClick={() => handleOptionClick(2)}>{fase.opcoes[2].texto}</button>
                </div>
                <div className='tip__container'>
                <p className='tip'>ⓘ Dica: Não existe decisão perfeita. Existe decisão consciente.</p>
                </div>
                </div>
              </section>
            </main>
    </div>
  );
}