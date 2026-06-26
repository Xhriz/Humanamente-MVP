import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageTeam from "../assets/Image/equip.png";

export default function Header({ profileName, onLogout }) {
  return (
    <header className='header__menu'>
      <div className='header__logo'>
        <img className='header__img' src={image1} alt="Logo" />
        <p className='header__name'>Humanamente</p>
      </div>
      <div className='header__profile'>
        <img className='header__profile-img' src={imageProfile} alt="icone do historico" />
        <button className='header__profile-button'>
          Histórico
        </button>
        <div className='header__profile-container'>
          <p className='header__profile-name'>{profileName}</p>
          <img className='header__profile-team' src={imageTeam} alt="icone de time" />
        </div>
        <button className='header__logout-btn' onClick={onLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}

