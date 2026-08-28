import { useState, useEffect } from 'react'
import './styles/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/menu';
import Game from './pages/Game';
import History from './pages/History';
import Feedback from './pages/Feedback';
import End from './pages/End'
import SelfAssessment from './pages/selfassessment';
import Instructions from './pages/Instructions';
import Home2 from './pages/Home2';


function App() {
  const [screen, setScreen] = useState(() => {
    const isLoggedIn = localStorage.getItem('header__profile-name');
    return isLoggedIn ? "instructions" : "home";
  });
  const [scrolled, setScrolled] = useState(false);
  const [profileName, setProfileName] = useState(() => {
    return localStorage.getItem('header__profile-name') || '';
  });
  const [gameScores, setGameScores] = useState(() => {
    const saved = localStorage.getItem('user__scores');
    return saved ? JSON.parse(saved) : null;
  });
  const [gameChoices, setGameChoices] = useState(() => {
    const saved = localStorage.getItem('user__choices');
    return saved ? JSON.parse(saved) : null;
  });
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [selfAssessmentScores, setSelfAssessmentScores] = useState(() => {
    const saved = localStorage.getItem('selfassessment__scores');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginSubmit = (teamName, participants) => {
    setProfileName(teamName);
    localStorage.setItem('header__profile-name', teamName);
    localStorage.setItem('login__timestamp', new Date().toISOString());
    localStorage.setItem('login__participants', JSON.stringify(participants || []));
    setScreen("instructions");
  };

  const handleGameEnd = (scores, choices) => {
    setGameScores(scores);
    setGameChoices(choices || []);
    // NÃO salva no localStorage ainda - espera a autoavaliação
    setScreen("end");
  };

  const handleLogout = () => {
    localStorage.removeItem('header__profile-name');
    localStorage.removeItem('user__scores');
    localStorage.removeItem('user__choices');
    localStorage.removeItem('selfassessment__scores');
    localStorage.removeItem('login__timestamp');
    localStorage.removeItem('login__participants');
    setProfileName('');
    setGameScores(null);
    setGameChoices(null);
    setSelfAssessmentScores(null);
    setScreen("home");
  };

return (
  <div className="container">
      {screen === "home" && (
        <Home
          scrolled={scrolled}
          onStartGame={() => setScreen("login")}
          onLogin={() => console.log("login")}
        />
      )}

      {screen === "login" && (
        <Login
          scrolled={scrolled}
          onSubmit={handleLoginSubmit}
          back={() => setScreen("home")}
        />
      )}
      {screen === "home2" && <Home2 onLogout={handleLogout} profileName={profileName} onHome={() => setScreen("home2")} onMenu={() => setScreen("menu")} />}
      {screen === "instructions" && <Instructions profileName={profileName} onLogin={() => setScreen("menu")} onLogout={handleLogout} onHome={() => setScreen("home2")}/>}
      {screen === "menu" && <Menu profileName={profileName} scores={gameScores} onLogin={(scenarioIndex) => {setSelectedScenario(scenarioIndex); setScreen("history");}} selfAssessmentScores={selfAssessmentScores} onLogout={handleLogout} onInstructions={() => setScreen("instructions")} onHome={() => setScreen("home2")}/>}
      {screen === "history" && <History profileName={profileName} scores={gameScores} selectedScenario={selectedScenario} onLogin={() => setScreen("game")} back={() => setScreen("menu")} onLogout={handleLogout} onHome={() => setScreen("home2")}/>}
      {screen === "game" && <Game profileName={profileName} selectedScenario={selectedScenario} onGameEnd={handleGameEnd} onLogout={handleLogout} onMenu={() => setScreen("menu")} onHome={() => setScreen("home2")}/>}
      {screen === "end" && <End profileName={profileName} scores={gameScores} selectedScenario={selectedScenario} onLogin={() => setScreen("selfassessment")} onLogout={handleLogout} onMenu={() => {setGameScores(null); setGameChoices(null); setScreen("menu");}} onHome={() => setScreen("home2")}/>}
      {screen === "feedback" && <Feedback onMenu={() => setScreen("menu")} restart={() => setScreen("game")} profileName={profileName} scores={gameScores} choices={gameChoices} selfAssessmentScores={selfAssessmentScores} onLogout={handleLogout} onHome={() => setScreen("home2")}/>}
      {screen === "selfassessment" && <SelfAssessment profileName={profileName} onLogout={handleLogout} onMenu={() => {setGameScores(null); setGameChoices(null); setScreen("menu");}} onFeedback={()=>{localStorage.setItem('user__scores', JSON.stringify(gameScores)); localStorage.setItem('user__choices', JSON.stringify(gameChoices)); const saved = localStorage.getItem('selfassessment__scores'); setSelfAssessmentScores(saved ? JSON.parse(saved) : null); setScreen("feedback");}} onHome={() => setScreen("home2")}/>}
    </div>
  );
}

export default App;