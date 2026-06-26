import { useState, useEffect } from 'react'
import './styles/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/menu';
import Game from './pages/Game';
import History from './pages/History';
import Feedback from './pages/Feedback';
import End from './pages/End'



function App() {
  const [screen, setScreen] = useState(() => {
    const isLoggedIn = localStorage.getItem('header__profile-name');
    return isLoggedIn ? "menu" : "home";
  });
  const [scrolled, setScrolled] = useState(false);
  const [profileName, setProfileName] = useState(() => {
    return localStorage.getItem('header__profile-name') || '';
  });
  const [gameScores, setGameScores] = useState(() => {
    const saved = localStorage.getItem('user__scores');
    return saved ? JSON.parse(saved) : null;
  });
  const [selectedScenario, setSelectedScenario] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginSubmit = (teamName) => {
    setProfileName(teamName);
    localStorage.setItem('header__profile-name', teamName);
    localStorage.setItem('login__timestamp', new Date().toISOString());
    setScreen("menu");
  };

  const handleGameEnd = (scores) => {
    setGameScores(scores);
    localStorage.setItem('user__scores', JSON.stringify(scores));
    setScreen("end");
  };

  const handleLogout = () => {
    localStorage.removeItem('header__profile-name');
    localStorage.removeItem('user__scores');
    localStorage.removeItem('login__timestamp');
    setProfileName('');
    setGameScores(null);
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
        />
      )}

      {screen === "menu" && <Menu profileName={profileName} scores={gameScores} onLogin={(scenarioIndex) => {setSelectedScenario(scenarioIndex); setScreen("history");}} onLogout={handleLogout}/>}
      {screen === "history" && <History profileName={profileName} scores={gameScores} selectedScenario={selectedScenario} onLogin={() => setScreen("game")} back={() => setScreen("menu")} onLogout={handleLogout}/>}
      {screen === "game" && <Game profileName={profileName} selectedScenario={selectedScenario} onGameEnd={handleGameEnd} onLogout={handleLogout}/>}
      {screen === "end" && <End profileName={profileName} scores={gameScores} selectedScenario={selectedScenario} onLogin={() => setScreen("feedback")} onLogout={handleLogout}/>}
      {screen === "feedback" && <Feedback onMenu={() => setScreen("menu")} restart={() => setScreen("game")} profileName={profileName} scores={gameScores} onLogout={handleLogout}/>}
    </div>
  );
}

export default App;