import { useState } from 'react';
import image1 from "../assets/Image/2.png";

export default function Login({ onSubmit, scrolled }) {
  const [teamName, setTeamName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teamName.trim()) {
      onSubmit(teamName);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className='header__logo'>
          <img className='header__img' src={image1} alt="Logo" />
          <p className='header__name'>Humanamente</p>
        </div>
      </header>

      <main className='login-container'>
        <div className='login__box'>
          <h1 className='login__title'>Bem-vindo ao Humanamente</h1>
          <p className='login__subtitle'>Insira o nome da sua equipe para continuar</p>

          <form className='login__form' onSubmit={handleSubmit}>
            <input
              type='text'
              className='login__input'
              placeholder='Nome da equipe'
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              autoFocus
              maxLength={40}
              minLength={3}
              required
            />
            <button type='submit' className='login__button'>
              Continuar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
