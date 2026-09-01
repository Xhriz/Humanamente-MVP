import { useState, useEffect, useRef } from 'react';
import image1 from "../assets/Image/2.webp";
import imageProfile from "../assets/Image/historico.webp";
import imageTeam from "../assets/Image/equip.webp";

export default function Header({ profileName, onLogout, onHome }) {
  const [showTeamPopup, setShowTeamPopup] = useState(false);
  const [participants, setParticipants] = useState([]);
  const popupRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowTeamPopup(false);
      }
    };

    if (showTeamPopup) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showTeamPopup]);

  return (
    <header className='header__menu'>
      <div className='header__logo'>
        <img className='header__img' src={image1} alt="Logo" />
        <p className='header__name'>Humanamente</p>
      </div>
      <div className='header__profile'>
        <img className='header__profile-img' src={imageProfile} alt="icone do historico" />
        <button className='header__profile-button' onClick={() => alert('Histórico de pontuação ainda não implementado')}>
          Histórico
        </button>
        <div className='header__profile-container' ref={popupRef}>
          <p className='header__profile-name'>{profileName}</p>
          <button
            className='header__profile-team-btn'
            onClick={() => setShowTeamPopup(!showTeamPopup)}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <img className='header__profile-team' src={imageTeam} alt="icone de time" />
          </button>
          {showTeamPopup && (
            <div className='header__team-popup'>
              <div className='header__team-popup-content'>
                <h3 className='header__team-popup-title'>Participantes da Equipe</h3>
                <table className='header__team-popup-table'>
                  <thead>
                    <tr>
                      <th className='header__team-popup-th'>Participante</th>
                      <th className='header__team-popup-th'>Função</th>
                    </tr>
                  </thead>
                  <tbody>
                    {participants.length > 0 ? (
                      participants.map((participant, index) => (
                        <tr key={index}>
                          <td className='header__team-popup-td'>{participant.name}</td>
                          <td className='header__team-popup-td'>{participant.role}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan='2' className='header__team-popup-td'>Nenhum participante</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <button className='header__home-btn' onClick={onHome}>
          Página Inicial
        </button>
        <button className='header__logout-btn' onClick={onLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}

