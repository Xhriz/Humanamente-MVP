import { useState } from 'react';
import image1 from "../assets/Image/2.png";
import interrogacao from "../assets/Image/interrogacao.png";

const AVAILABLE_ROLES = [
  { id: 'facilitador', label: 'Facilitador', tooltip: 'Condução do cenário, observação do desempenho, mediação do debriefing' },
  { id: 'operador_painel', label: 'Operador de Painel', tooltip: 'Monitorar variáveis via painel, ajustar proporções, atuar em alarmes' },
  { id: 'operador_area', label: 'Operador de Área', tooltip: 'Inspeções locais, verificação de válvulas, sensores e queimadores' },
  { id: 'coordenador_turno', label: 'Coordenador de Turno', tooltip: 'Coordenação geral, decisões estratégicas, gerenciamento e comunicação entre áreas' },
  { id: 'tecnico_manutencao', label: 'Técnico de Manutenção', tooltip: 'Suporte a equipamentos de controle e válvulas' },
  { id: 'equipe_emergencia', label: 'Equipe de Emergência', tooltip: 'Atuação em caso de falha crítica ou parada de emergência' },
  { id: 'equipe_sms', label: 'Equipe de SMS', tooltip: 'Garantir que as condições de segurança sejam mantidas, acionando os procedimentos de evacuação se necessário, e monitorando os limites de exposição a gases inflamáveis' },
  { id: 'gerencia_sms', label: 'Gerência de SMS', tooltip: 'Garantir que os riscos sejam identificados e mitigados, e que as permissões de trabalho atendam aos critérios de segurança' },
  { id: 'equipe_planejamento', label: 'Equipe de Planejamento', tooltip: 'Responsável pela elaboração e emissão das permissões de trabalho para todas as atividades de manutenção' },
  { id: 'gerente_geral', label: 'Gerente Geral', tooltip: 'Responsável pela direção estratégica da unidade, alinhando decisões da parada às metas de segurança, produção e custo' },
  { id: 'coordenador_parada', label: 'Coordenador de Parada', tooltip: 'Planejar e coordenar a execução global da parada, priorizando serviços, integrando áreas e gerindo o cronograma crítico' },
  { id: 'coord_planejamento_operacional', label: 'Coordenador de Planejamento Operacional de Parada', tooltip: 'Traduzir o escopo da parada em janelas operacionais, sequências de bloqueio e desbloqueio, e estratégias de retorno à operação' },
  { id: 'supervisor_contratada', label: 'Supervisor de Contratada', tooltip: 'Acompanhar as equipes terceirizadas, garantir cumprimento de escopo, prazos e requisitos de segurança definidos pela contratante' },
  { id: 'supervisor_turno', label: 'Supervisor de Turno', tooltip: 'Liderar a equipe de turno na execução das atividades, distribuir tarefas, acompanhar riscos e manter comunicação com coordenação de parada' },
  { id: 'outros', label: 'Outros', tooltip: 'Outro papel na equipe' },
];

export default function Login({ onSubmit, scrolled, back }) {
  const [teamName, setTeamName] = useState('');
  const [selectedDropdown, setSelectedDropdown] = useState('');
  const [addedRoles, setAddedRoles] = useState([]);

  const outrosCount = addedRoles.filter(r => r.id.startsWith('outros')).length;

  const availableToAdd = AVAILABLE_ROLES.filter(r => {
    if (r.id === 'outros') return outrosCount < 5;
    return !addedRoles.some(added => added.id === r.id);
  });

  const handleAddRole = () => {
    if (!selectedDropdown) return;
    const role = AVAILABLE_ROLES.find(r => r.id === selectedDropdown);
    if (!role) return;
    const uniqueId = role.id === 'outros' ? `outros_${outrosCount + 1}` : role.id;
    setAddedRoles(prev => [...prev, { ...role, id: uniqueId, name: '' }]);
    setSelectedDropdown('');
  };

  const handleRemoveRole = (id) => {
    setAddedRoles(prev => prev.filter(r => r.id !== id));
  };

  const handleRoleNameChange = (id, value) => {
    setAddedRoles(prev => prev.map(r => r.id === id ? { ...r, name: value } : r));
  };

  const getNameErrorMessage = (name) => {
    if (!name || name.trim().length === 0) {
      return 'Campo obrigatório';
    }
    const length = name.trim().length;
    if (length < 3) {
      const needed = 3 - length;
      return `Faltam ${needed} ${needed === 1 ? 'caractere' : 'caracteres'}`;
    }
    if (length >= 20) {
      const excess = length - 19;
      return `Excede ${excess} ${excess === 1 ? 'caractere' : 'caracteres'}`;
    }
    return '';
  };

  const isFormValid = () => {
    if (!teamName.trim()) return false;
    if (addedRoles.length === 0) return true;
    return addedRoles.every(r => r.name.trim().length >= 3 && r.name.trim().length < 20);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const participants = addedRoles.map(r => ({ role: r.label, name: r.name.trim() }));
      onSubmit(teamName, participants);
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
        <div className="login">
          <p className='login__close' onClick={back}>X</p>
          <div className='login__box'>
            <h1 className='login__title'>Bem-vindo ao Humanamente</h1>
            <p className='login__subtitle'>Insira o nome da sua equipe para continuar</p>

            <form className='login__form' onSubmit={handleSubmit}>
              <input
                type='text'
                className='login__input'
                placeholder='Nome da Equipe'
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                autoFocus
                maxLength={40}
                minLength={3}
                required
              />

              <h2 className='login__actors'>Papéis da Equipe</h2>
              <p className='login__roles-hint'>Selecione os papéis que sua equipe possui (opcional)</p>

              <div className='login__role-add'>
                <select
                  className='login__select'
                  value={selectedDropdown}
                  onChange={(e) => setSelectedDropdown(e.target.value)}
                >
                  <option value=''>Selecione um papel...</option>
                  {availableToAdd.map(role => (
                    <option key={role.id} value={role.id}>{role.label}</option>
                  ))}
                </select>
                <button
                  type='button'
                  className='login__add-btn'
                  onClick={handleAddRole}
                  disabled={!selectedDropdown}
                >
                  + Adicionar
                </button>
              </div>

              {addedRoles.map(role => (
                <div key={role.id} className='login__role-item'>
                  <div className='login__role-header'>
                    <span className='login__label'>{role.label}</span>
                    <div className='login__role-actions'>
                      <span className='login__tooltip-wrapper login__tooltip-wrapper--inline' data-tooltip={role.tooltip}>
                        <img className='login__interrogacao' src={interrogacao} alt="Info" />
                      </span>
                      <button
                        type='button'
                        className='login__remove-btn'
                        onClick={() => handleRemoveRole(role.id)}
                        aria-label={`Remover ${role.label}`}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                  <input
                    type='text'
                    className='login__input'
                    placeholder='Nome do Participante'
                    value={role.name}
                    onChange={(e) => handleRoleNameChange(role.id, e.target.value)}
                    minLength={3}
                    maxLength={19}
                    required
                  />
                  {getNameErrorMessage(role.name) && (
                    <span className='login__error-message'>{getNameErrorMessage(role.name)}</span>
                  )}
                </div>
              ))}

              <button type='submit' className='login__button' disabled={!isFormValid()}>
                Continuar
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
