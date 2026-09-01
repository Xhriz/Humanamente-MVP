import imageGame2 from "./assets/Image/cenario1history.webp";
import videoHistory from "./assets/Video/videoinity.mp4";
import imageGame3 from "./assets/Image/cenario2history.webp";
import imageGame4 from "./assets/Image/cenario3history.webp";
import imageGame5 from "./assets/Image/cenario4history.webp";

const historyData = [{
  subtitle: "Cenário Complexo",
  title: "Vazamento e Alarme de H₂S",
  text: `A unidade de coque da refinaria está operando em carga nominal. A B‑98508A, bomba crítica de circulação, mantém o fluxo de derivado para a fracionadora.

Durante o turno, o operador de painel observa uma leve queda de vazão e um aumento gradual da temperatura no topo da coluna. O histórico mostra pequenas oscilações nas últimas horas, mas nada fora do limite.

De repente, um conjunto de alarmes é acionado: os detectores de H₂S AI‑98553 e AI‑98555 indicam presença de gás tóxico na área próxima à B‑98508A/B e ao V‑98516. A sala de controle recebe uma chuva de alarmes simultâneos, e a equipe de campo relata cheiro forte e sensação de irritação na região.

A partir deste momento, a operação deixa de ser rotina e passa a ser uma condição anormal com potencial para emergência.

Você faz parte da equipe responsável por coordenar a resposta: painel, campo, SMS, brigada e manutenção. Suas decisões vão influenciar a segurança das pessoas, a integridade dos equipamentos e a continuidade da operação.

Em cada evento, você terá três opções de atuação. Não há “resposta correta”, mas cada escolha leva a um caminho diferente, com consequências próprias. Em todos os casos, o objetivo é o mesmo: proteger vidas, o meio ambiente e o patrimônio, aprendendo com as decisões tomadas.

Leia o contexto, escolha sua ação em até 5 minutos e acompanhe a evolução do cenário.`,
  image: imageGame2,
  video: videoHistory
},
{
  subtitle: "Cenário Complexo",
  title: "Parada de Manutenção Programada",
  text: `Vocês estão iniciando o turno na refinaria e devem revisar se todos protocolos estão conforme e se todos os setores então cientes da parada da FCC para a manutenção. Cada equipe confirma o recebimento da programação e começa a revisar os procedimentos.

Os Engenheiros e supervisores de operação analisam os fluxogramas de engenharia para identificar cada ponto onde a raquetes devem ser inseridas para isolar reatores, torres, vasos e bombas.

Vamos preparar a Unidade para a Parada Programada de Manutenção de modo que haja segurança das pessoas e da unidade.

Vocês terão 5 minutos para cada decisão.`,
  image: imageGame3,
  video: videoHistory
},
{
  subtitle: "Cenário Complexo",
  title: "Degradação Térmica de uma Linha de Troca de Calor",
  text: `Durante a operação de uma planta de processamento de gás natural, uma das linhas de troca térmica passa a operar sob condições anormais de temperatura. Inicialmente, os desvios observados parecem pequenos e permanecem dentro dos limites operacionais formais, o que reduz a percepção de urgência por parte das equipes. 

Embora alarmes estejam ocorrendo há vários turnos, a equipe ainda não percebe completamente a interação entre: 

. Redução de temperatura; 

. Formação de condensado; 

. Fragilização de equipamentos; 

. Alteração das propriedades dos fluidos; 

. Mudança do comportamento dinâmico do processo. 

O cenário evolui progressivamente até culminar em um acidente de processo. 

Vocês terão 5 minutos para cada decisão.`,
  image: imageGame4,
  video: videoHistory
},
{
  subtitle: "Cenário Complexo",
  title: "Planejamento e Execução de uma Parada de Manutenção",
  text: `Durante a preparação da Parada de Manutenção, um equipamento crítico é redescoberto fora do escopo congelado. Gradualmente, sinais de desalinhamento começam a aparecer entre as áreas e no cronograma. Embora existam alertas e ressalvas em reuniões e e-mails há semanas, a equipe ainda não percebe completamente a interação entre:

. Descoberta tardia de novos serviços;

. Aquisição emergencial (ou atraso) de materiais críticos;

. Revisões contratuais e mobilização extraordinária de recursos;

. Conflitos de prioridade e sequenciamento das atividades;

. Impacto acumulado no caminho crítico e nas liberações operacionais.

O cenário evolui progressivamente até culminar em atrasos relevantes, retrabalho e elevação do risco operacional na execução da parada. 

Vocês terão 5 minutos para cada decisão.`,
  image: imageGame5,
  video: videoHistory
},
]

export default historyData;