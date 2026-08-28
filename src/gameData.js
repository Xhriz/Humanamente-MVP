import imageGame3 from "./assets/Image/game3.png";
import imageGame4 from "./assets/Image/game4.png";
import imageGame5 from "./assets/Image/game5.png";
import imageGame6 from "./assets/Image/game6.png";
import imageGame8 from "./assets/Image/game8.png";
import imageGame10 from "./assets/Image/game10.png";

import imageGame14 from "./assets/Image/game14.png";
import imageGame15 from "./assets/Image/game15.png";
import imageGame16 from "./assets/Image/game16.png";
import imageGame17 from "./assets/Image/game17.png";
import imageGame18 from "./assets/Image/game18.png";
import imageGame20 from "./assets/Image/game20.png";

import imageGame21 from "./assets/Image/evento2.png";
import imageGame22 from "./assets/Image/evento1.png";
import imageGame23 from "./assets/Image/evento3.png";
import imageGame24 from "./assets/Image/evento4.png";
import imageGame25 from "./assets/Image/evento5.png";
import imageGame26 from "./assets/Image/evento6.png";
import imageGame27 from "./assets/Image/evento7.png";
import imageGame28 from "./assets/Image/evento8.png";
import imageGame29 from "./assets/Image/evento9.png";
import imageGame30 from "./assets/Image/evento10.png";
import imageGame31 from "./assets/Image/evento11.png";
import imageGame32 from "./assets/Image/evento12.png";
import imageGame33 from "./assets/Image/evento13.png";
import imageGame34 from "./assets/Image/evento14.png";
import imageGame35 from "./assets/Image/evento15.png";
import imageGame36 from "./assets/Image/evento16.png";
import imageGame37 from "./assets/Image/evento17.png";
import imageGame38 from "./assets/Image/evento18.png";

import imageGame39 from "./assets/Image/evento19.png";
import imageGame40 from "./assets/Image/evento20.png";
import imageGame41 from "./assets/Image/evento21.png";
import imageGame42 from "./assets/Image/evento22.png";
import imageGame43 from "./assets/Image/evento23.png";
import imageGame44 from "./assets/Image/evento24.png";
import imageGame45 from "./assets/Image/evento25.png";
import imageGame46 from "./assets/Image/evento26.png";
import imageGame47 from "./assets/Image/evento27.png";
import imageGame48 from "./assets/Image/evento28.png";
import imageGame49 from "./assets/Image/evento29.png";
import imageGame50 from "./assets/Image/evento30.png";


function seededShuffle(array, seed) {
  const shuffled = [...array];
  let random = seed;
  const randomNext = () => {
    random = (random * 9301 + 49297) % 233280;
    return random / 233280;
  };
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(randomNext() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const gameData = [{
  cenario1: [
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame22,
    descricao:"Os detectores AI‑98553 e AI‑98555 indicam H₂S próximo à B‑98508A/B. O painel registra queda de vazão na B‑98508A e aumento da temperatura no topo da fracionadora. A equipe de campo informa por rádio que o cheiro está forte. Sua primeira ação ao reconhecer o vazamento:",
    opcoes: [
      {
        texto: "Declarar condição anormal, acionar o Alarme de Gás Tóxico / H₂S e comunicar imediatamente Sala de Controle Central, SMS e Supervisor de Turno.",
        notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Pedir primeiro para o operador de campo se aproximar visualmente da B‑98508A antes de acionar qualquer alarme formal.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Tentar confirmar as leituras analisando histórico de dados (trends, logs) por alguns minutos, esperando ver se a concentração de H₂S se mantém antes de declarar condição anormal.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame21,
    descricao:"O alarme de gás tóxico é disparado. SMS e brigada são avisados. Parte da equipe se desloca para pontos de reunião. Alguns operadores de campo ainda estão na área, aguardando instruções claras. Como você organiza a resposta inicial:",
    opcoes: [
      {
        texto: "Bloquear imediatamente o acesso à área da B‑98508AB, emitir mensagem de rádio “Ninguém entra na área até nova ordem” e confirmar se há pessoas em campo.",
        notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Priorizar ajuste de processo no painel (corte de carga, redução de temperatura) e deixar a organização de campo para SMS e Supervisor.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Convidar todos a darem opiniões no rádio antes de qualquer definição, criando uma “discussão aberta” para decidir próximos passos.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame3,
    descricao:"O painel continua mostrando queda de vazão na B‑98508A, temperatura elevada no topo da fracionadora e instabilidade na pressão. A discussão agora é sobre corte de carga e estabilização da unidade. Como você atua no processo:",
    opcoes: [
      {
        texto: "Reduzir carga da unidade e ajustar refluxo e pressão da coluna, comunicando claramente que o objetivo é estabilizar e reduzir inventário até entender o tamanho do vazamento.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Manter carga por enquanto, ajustando apenas refluxo e controles, para “não impactar a produção” até haver certeza de que é necessário.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 3,
          "tomada_decisao": 4,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "Pedir que a equipe de Engenharia decida sobre a estratégia de carga, enquanto você se concentra em acompanhar apenas os alarmes.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 3,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame4,
    descricao:"O SMS autoriza aproximação controlada à área, com uso de respirador autônomo (SCBA) e detector portátil de H₂S. A equipe de campo se posiciona em área segura, à favor do vento, e aguarda instruções sobre inspeção visual da B‑98508A/B e entorno. O que fazer:",
    opcoes: [
      {
        texto: "Reforçar que ninguém se aproxima sem autorização formal de SMS, exigir SCBA e detector portátil, e orientar inspeção visual a partir de posições protegidas.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Permitir aproximação com EPI incompleto, “apenas para ver rápido”, considerando que a concentração de H₂S parece moderada.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Suspender qualquer inspeção de campo até que todos os alarmes caiam, mantendo equipe apenas em posição de espera.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 3,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame5,
    descricao:"A inspeção (quando ocorre) revela que há vazamento significativo na região da B‑98508A, possivelmente relacionado a falha de selagem. O operador informa que há líquido escorrendo próximo à bomba e possibilidade de emissão de H₂S e hidrocarbonetos. Qual sua decisão:",
    opcoes: [
      {
        texto: "Isolar a bomba: ordenar fechamento das válvulas de sucção e descarga, solicitar desenergização elétrica da B‑98508A e reforçar cordão de segurança com brigada.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Tentar reestabelecer a operação da bomba ajustando apenas controles no painel, sem isolar imediatamente, para ver se a condição melhora.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "Focar apenas em monitorar os detectores de H₂S e deixar a questão da bomba para manutenção decidir depois.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame6,
    descricao:"Agora é necessário alinhar as ações entre painel, campo e SMS: garantir que a bomba esteja realmente isolada, que a energia esteja cortada e que as pressões estejam controladas. Também há discussão sobre evacuação da área ampliada. O que fazer:",
    opcoes: [
      {
        texto: "Reforçar checklist de coordenação: campo confirma sucção/descarga fechadas, painel confirma intertravamentos e SMS valida zona de isolamento.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Assumir que “deve estar tudo certo” com base na primeira informação, sem revalidar passos com cada área.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Focar apenas na interação com SMS, deixando de lado campo e painel, acreditando que “o importante é a segurança, o resto eles se viram”.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 3,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame23,
    descricao:"A situação evolui e, por segurança, há forte indicação de corte total da carga fresca da unidade, conforme o cenário oficial (trip de bomba crítica, vazamento com H₂S, instabilidade). É necessário decidir o tipo de parada (emergencial vs. controlada). Sua decisão será:",
    opcoes: [
      {
        texto: "Confirmar corte de carga com painel, comunicar imediatamente Supervisor, Operadores de campo e SMS, e propor parada controlada se a situação estiver estabilizada.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Defender parada emergencial imediata, mesmo com algumas informações ainda incompletas, priorizando risco zero.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Adiar qualquer definição de tipo de parada até “mais dados” estarem disponíveis, mantendo a discussão aberta.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame8,
    descricao:"Com a carga cortada, o nível do V‑98503 começa a subir devido a retornos e ajustes de V‑13. É necessário monitorar cuidadosamente para evitar transbordo ou condição de nível descontrolado. Sua atitude será:",
    opcoes: [
      {
        texto: "Verificar desempenho de forno, estabilidade de carga e utilidades, ajustando V‑13 e outras variáveis para manter o nível dentro de faixa segura.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Tratar o aumento de nível como algo secundário, acreditando que “vai estabilizar sozinho” depois que o vazamento for resolvido.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Delegar completamente a análise de níveis à equipe de outra unidade, sem acompanhar ativamente.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame24,
    descricao:"Após controlar vazamentos e pressões, a equipe precisa decidir como será o encaminhamento do equipamento e da unidade: limpeza, descoque, inspeções, reparos. O que fazer:",
    opcoes: [
      {
        texto: "Planejar, junto com Manutenção e Engenharia, um roteiro de inspeção, limpeza e eventual descoque, integrando lições aprendidas do evento.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Propor um retorno rápido à operação, minimizando o tempo de parada, dando pouca ênfase ao aprendizado do evento.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Deixar o encaminhamento totalmente nas mãos da manutenção, sem participar ativamente da definição.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 3,
          "consciencia_situacional": 4,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame10,
    descricao:"O evento foi controlado, a unidade foi estabilizada e as pessoas estão seguras. Agora, o foco é o debriefing, prática central do HumanaMente Fase 2. Sua decisão será:",
    opcoes: [
      {
        texto: "Participar ativamente do debriefing, revisando decisões, comunicação, coordenação e propondo melhorias nas habilidades não técnicas.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Tratar o debriefing como formalidade, com participação mínima, mas presença física.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Evitar o debriefing, priorizando “voltar logo para a rotina”.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      }
    ]
  }
  ],








  cenario2:[
{
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame26,
    descricao:"Na fase de Elaboração do Plano de Bloqueio e Raqueteamento, identificou-se que houve uma falha na identificação de um ponto de isolamento, onde uma raquete deveria ser inserida para isolar uma determinada torre. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Suspender temporariamente a aprovação do plano de raqueteamento daquela torre específica e sinalizar no sistema (ou prontuário físico) que o circuito está em revisão regulatória.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 3,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }, 
        resposta:"muito bom"
      },
      {
        texto: "A engenharia de manutenção deve calcular/validar a espessura da nova raquete com base na pressão e temperatura de projeto daquela linha específica para garantir que ela suportará o bloqueio. ",
        notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        },
        resposta:"muito bom"
      },
      {
        texto: "O supervisor de operação e o técnico de inspeção de equipamentos devem ir ao campo especificamente no flange esquecido.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        },
        resposta:"muito bom"
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame27,
    descricao:"O caldeireiro, por uma falha de comunicação e sem aguardar a emissão da devida permissão de trabalho, inicia atividades raqueteamento em uma caldeira sem a verificação dos riscos operacionais e sem o controle de segurança. A documentação de risco não foi validada para essa atividade específica. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "O Supervisor deve imediatamente parar a atividade, comunicar ao operador e questionar o caldeireiro sobre a permissão de trabalho.",
        notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "O Supervisor deve verificar se os riscos associados à atividade do caldeireiro estão identificados na documentação de riscos e garantir que os procedimentos sejam seguidos.",
        notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 2,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "O caldeireiro não precisava aguardar a emissão da permissão de trabalho para realizar uma atividade relacionada ao raqueteamento.",
        notech:{
          "comunicacao": 1,
          "cooperacao": 1,
          "lideranca": 1,
          "tomada_decisao": 1,
          "consciencia_situacional": 1,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame28,
    descricao:"Atenção! Foi detectada a presença de gás inflamável na área pelos sensores de gás, com os alarmes acionados. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "O Supervisor deve coordenar imediatamente a evacuação da área afetada e comunicar o incidente ao COTUR.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "A Equipe de Segurança deve ativar o sistema de supressão de incêndios e realizar a monitorização contínua de gases inflamáveis. ",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "O caldeireiro somente deve ser removido da área e instruído sobre os procedimentos corretos de segurança e permissões de trabalho.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame14,
    descricao:"Durante a revisão da documentação de riscos, a equipe de planejamento não identificou um risco crítico existente relacionado ao sistema de vácuo do regenerador, que pode causar problemas de pressão durante a parada. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Convocar equipe multidisciplinar: Coordenador de planejamento, Gerente da parada, Grupo de Planejamento da Intervenção, Grupo de Planejamento de Manutenção, Planejador de materiais, SMS. Focar no sistema de regenerador e sistemas auxiliares. Se um risco crítico escapou, todo o estudo precisa de revalidação. ",
      notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Acionar a equipe de Segurança de Processo e abrir desvio no sistema de gestão e tratar como incidente de quase-perda na fase de planejamento.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Fazer um comunicado formal para o Grupo de Planejamento de Manutenção bloqueando intervenções na unidade até reanálise concluída.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 3,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame15,
    descricao:"Tendo em vista que a elaboração das matrizes de Libra foi copiada da parada anterior sem a devida revisão da Lista de Bloqueios e sem considerar a atualização da planta, a Lista de Bloqueios está desatualizada. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Solicitar ao Coordenador de planejamento todas as Gestões de Mudanças implementadas desde a última parada para atualizar as matrizes de Libra.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 3,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Fazer uma vistoria na área para conferir todas as etiquetas, posição, acessibilidade, estado de cada válvula de bloqueio, dreno, raquetes, etc.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Montar força-tarefa multidisciplinar para refazer LIBRA.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame16,
    descricao:"Identificou-se a necessidade de reconhecer os riscos potenciais e introduzir medidas de controle para sua redução ou eliminação do risco ambiental durante a redução da carga para a parada de manutenção. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Na redução de carga da FCC têm-se pouco tempo e muito transiente. Deve-se focar em medidas de controle já existentes, sem depender de obra ou novos projetos, descrevendo uma lista de ações corretivas em caso de falha na identificação de um risco ambiental.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "A Gerência de SMS deve revisar a documentação de riscos e garantir que todos os riscos possíveis estejam corretamente identificados.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Monitorar a unidade, comprovando que a fumaça do flare/chaminé do regenerador ficou dentro do padrão permitido pela licença de operação. Serve como contraprova se houver denúncia da comunidade ou auto de órgão ambiental.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame17,
    descricao:"A tarefa é reduzir gradualmente a carga da unidade mantendo o controle das variáveis da unidade. O ajuste correto da proporção de ar e vapor é crucial para garantir uma combustão eficiente e segura. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Redução gradual da carga.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Ajuste de circulação de catalisador.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 4,
          "lideranca": 3,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Controle de ar e vapor.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame18,
    descricao:"Durante uma redução de carga para 1.000–1.500 m³/d, as temperaturas das fases densa e diluída caíram para um patamar próximo a 620°C. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Uma temperatura de regenerador próxima de 620 °C não exige, necessariamente, uma parada, mas costuma ser um sinal de que a unidade está se aproximando do limite inferior do balanço térmico.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Aumentar a circulação de catalisador para transportar mais calor ao reator.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Interromper temporariamente a redução de carga.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame25,
    descricao:"Durante um ajuste de vapor e ar, o operador de painel faz um ajuste inadequado na proporção, resultando em um aumento inesperado na temperatura de combustão no regenerador. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Retornar a vazão para o valor anterior ou para a faixa prevista no procedimento operacional.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Reduzir gradualmente o excesso de ar que provocou a elevação da combustão, monitorar atentamente O₂, CO e as temperaturas das fases densa e diluída, e verificar continuamente a ocorrência de queima descontrolada e indesejada de gases de combustão.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "O supervisor de turno deve avaliar o impacto da falha e determinar se há risco de danos ao equipamento, considerando uma possível necessidade de reduzir ainda mais a produção.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Parada de Manutenção Programada",
    image:imageGame20,
    descricao:"O ajuste não foi corrigido rapidamente, e a temperatura de combustão ultrapassa o limite de segurança, aumentando o risco de danos térmicos aos componentes do regenerador. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "O operador de painel deve ativar o sistema de resfriamento de emergência do regenerador.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Preparar antecipação da parada, suspendendo imediatamente a carga fresca e isolando fontes de hidrocarboneto.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Acionar a parada emergencial para proteger a integridade do equipamento e comunicar a situação ao departamento de manutenção.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      }
    ]
  }
],









  cenario3:[
{
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame29,
    descricao:"Os operadores observam uma redução gradual da temperatura em um trocador de calor crítico da unidade de processamento de gás natural. Embora o desvio permaneça dentro dos limites operacionais estabelecidos, os valores começam a se afastar dos padrões históricos normalmente observados pela equipe. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Intensificar o monitoramento local dos parâmetros operacionais.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 3,
          "consciencia_situacional": 4,
        }, 
        resposta:"muito bom"
      },
      {
        texto: "Solicitar avaliação técnica da engenharia de processo e revisão dos alarmes associados.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        },
        resposta:"muito bom"
      },
      {
        texto: "Realizar uma reunião operacional para análise dos desvios.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        resposta:"muito bom"
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame30,
    descricao:"Após alguns turnos de operação sob condições anormais, novos alarmes relacionados à temperatura e à pressão do sistema começam a surgir. Inicialmente os alarmes eram tratados como eventos isolados. Entretanto, com o aumento da frequência das ocorrências, parte da equipe passa a considerá-los uma condição normal de operação, caracterizando a normalização dos desvios. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Registrar os alarmes e continuar monitorando a evolução do processo.",
        notech:{
          "comunicacao": 3,
          "cooperacao": 2,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "Designar operador adicional para monitoramento dos alarmes e das variáveis críticas.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Revisar a criticidade dos alarmes e revalidar o estado operacional da unidade.",
        notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame31,
    descricao:"O operador que encerra o turno não comunica adequadamente o histórico dos desvios acumulados relacionados à redução de temperatura, aumento da frequência de alarmes e alterações observadas no comportamento do processo. A equipe que assume a operação recebe apenas informações gerais sobre as condições da unidade e não compreende plenamente a evolução dos desvios observados nos turnos anteriores. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Emitir relatório operacional de turno com destaque para os desvios observados.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 3,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Promover a transferência completa das informações críticas relacionadas ao estado operacional da unidade.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Realizar reunião de alinhamento operacional entre supervisores dos turnos para revisão dos principais aspectos da operação antes da transferência definitiva da responsabilidade operacional.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame32,
    descricao:"Após a transferência de turno, a quantidade de alarmes da unidade continua aumentando progressivamente. Entretanto, devido ao acúmulo de atividades operacionais no início do turno, os operadores passam a enfrentar uma situação de sobrecarga cognitiva, reduzindo sua capacidade de analisar adequadamente todos os eventos apresentados pelo sistema de controle! Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Designar operador de apoio para monitoramento exclusivo dos alarmes.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Revisar a criticidade dos alarmes e revalidar o estado operacional da unidade.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Realizar uma reunião operacional de análise dos alarmes e tendências do processo.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame33,
    descricao:"O resfriamento progressivo do sistema continua evoluindo e passa a alterar o comportamento termodinâmico do fluido de processo. Durante o acompanhamento operacional, identifica-se a formação de condensado em regiões não previstas pelas premissas originais de projeto. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Avaliar a necessidade de redução de carga ou parada controlada da unidade.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Comunicar o cenário ao COTUR para avaliação e tomada de decisão.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Convocar engenharia para avaliação das condições operacionais da unidade afetada.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame34,
    descricao:"Com o passar dos turnos, surge uma divergência de percepção entre os operadores e a liderança operacional. Enquanto os operadores demonstram preocupação crescente com a degradação das condições operacionais observadas na linha de troca térmica, a supervisão entende que os desvios ainda se encontram dentro de uma faixa aceitável de operação e que não existem evidências suficientes para justificar ações mais conservadoras. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Realizar uma reunião multidisciplinar de avaliação de riscos.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Solicitar à Engenharia e à área de Integridade uma avaliação aprofundada dos parâmetros operacionais, da formação de condensado e dos possíveis impactos sobre os equipamentos.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Manter a operação da unidade conforme planejado, sem alterar significativamente as condições operacionais, mas reforçar o monitoramento.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame35,
    descricao:"A quantidade de alarmes no painel continua aumentando significativamente. Os operadores passam a ter dificuldade para distinguir quais eventos realmente exigem intervenção imediata e quais representam apenas consequências secundárias da degradação das condições operacionais. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Redistribuir a carga de trabalho na CIC, criando uma estrutura de apoio para análise dos alarmes e suporte à tomada de decisão.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Reforçar a comunicação entre os operadores para melhor compartilhar informações sobre alarmes ativos e condições do processo.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "Designar uma equipe de apoio temporária para triagem dos alarmes.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame36,
    descricao:"As condições de temperatura da unidade continuam se degradando e atingem níveis incompatíveis com as premissas de projeto de parte dos equipamentos. A planta permanece operando, porém surgem vibrações e ruídos incomuns e possíveis indícios de perda de integridade mecânica. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Constituir uma força-tarefa multidisciplinar para realizar avaliação conjunta da condição dos equipamentos, definir limites operacionais seguros e recomendar ações mitigadoras.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Estabelecer restrições operacionais temporárias, incluindo redução de carga, limitação de vazão, restrições de temperatura e monitoramento reforçado dos equipamentos.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Intensificar o monitoramento operacional sem alterar as condições da unidade.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 4,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame37,
    descricao:"Tendo em vista que uma redução da carga impactará diretamente o fornecimento de gás aos clientes, gerando consequências comerciais e operacionais, a gerência demonstra preocupação com os impactos da redução na produção e passa a pressionar pela continuidade operacional. A cultura organizacional da empresa apresenta histórico de priorização dos resultados produtivos, favorecendo a aceitação de riscos operacionais que nem sempre são plenamente compreendidos. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Coordenador de Turno (COTUR) mantém a operação com restrições operacionais temporárias.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Reduzir a carga da planta para aumentar a margem de segurança operacional.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Realizar uma reunião formal de avaliação de riscos operacionais com participação multidisciplinar.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Degradação Térmica de uma Linha de Troca de Calor",
    image:imageGame38,
    descricao:"Apesar das medidas adotadas ao longo dos eventos anteriores, a degradação das condições operacionais continua evoluindo. Os indícios de fragilização mecânica tornam-se mais evidentes e a planta passa a operar em condição de elevada vulnerabilidade operacional. A degradação acumulada encaminha condições de alta vulnerabilidade operacional. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Reduzir progressivamente a carga da unidade e implementar operação em regime de contingência.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Intensificar o monitoramento da integridade e reforçar as barreiras operacionais sem parar a unidade.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Realizar uma reunião extraordinária de gestão da crise e executar parada segura da unidade.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      }
    ]
  }
],









  cenario4:[
{
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame39,
    descricao:"Necessidades relevantes de manutenção não foram identificadas antes do congelamento do escopo da parada, resultando na descoberta tardia de necessidade de novos serviços em equipamento crítico, aquisição emergencial de materiais, revisões contratuais e alterações de cronograma. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Realizar uma revisão integrada do escopo com comitê multidisciplinar para identificar serviços não contemplados, avaliar riscos e definir o tratamento adequado para cada nova demanda.",
        notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Envolve todas as áreas na análise dos desvios de escopo, promovendo comunicação ampla e cooperação entre disciplinas. A liderança se manifesta ao convocar e conduzir o comitê, a decisão é estruturada com base em avaliação de riscos, e a visão conjunta amplia a consciência situacional sobre os impactos do novo escopo.",
        resposta:"muito bom"
      },
      {
        texto: "Reduzir o escopo adicional para minimizar custos da parada. ",
        notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 4,
          "tomada_decisao": 3,
          "consciencia_situacional": 4,
        },
        justificativa: "É uma decisão unilateral que restringe a comunicação com as áreas afetadas e reduz a cooperação, pois ignora as necessidades já identificadas. A liderança aparece ao assumir o corte, mas a tomada de decisão é pouco fundamentada em análise de risco, ainda que mantenha alguma consciência situacional sobre o impacto no cronograma e no custo.",
        resposta:"muito bom"
      },
      {
        texto: "Incluir todos os serviços identificados, mobilizando recursos adicionais, revisando contratos e adquirindo materiais emergencialmente.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        },
        justificativa: "Resolve o problema por meio da comunicação com contratos e fornecedores e da cooperação para mobilizar recursos adicionais, mas sem a etapa de avaliação conjunta de riscos, o que mantém liderança, decisão e consciência situacional em bom nível, porém abaixo do patamar da revisão multidisciplinar de escopo.",
        resposta:"muito bom"
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame40,
    descricao:"Na integração do cronograma da Parada, foi identificado conflito de escopo no mesmo permutador de calor crítico: Engenharia planejou substituição do feixe/adequações e Manutenção programou abertura para limpeza e inspeção. As atividades foram planejadas sem alinhamento, responsabilidades e sequenciamento definidos, elevando risco de conflitos, retrabalho, custos e atraso no cronograma. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Realizar uma reunião integrada de alinhamento entre engenharia, manutenção e operação com o objetivo de promover discussão multidisciplinar para revisão conjunta dos escopos, identificação de interfaces e definição formal das responsabilidades e prioridades.",
        notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Reúne as três áreas envolvidas no conflito, fortalecendo comunicação e cooperação diretamente na causa do problema; a liderança conduz o processo de forma coletiva, a decisão nasce de discussão estruturada e a consciência situacional é ampliada ao mapear as interfaces entre os escopos."
      },
      {
        texto: "Estabelecer uma única liderança técnica e executiva responsável pelo planejamento integrado.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 3,
        },
        justificativa: "Concentra a solução em uma liderança forte (nota máxima), com comunicação, cooperação e decisão em bom nível ao centralizar o planejamento, mas a consciência situacional cai por depender de uma única visão, sem o mapeamento coletivo das interfaces entre engenharia e manutenção."
      },
      {
        texto: "Elaborar plano integrado de execução e sequenciamento das atividades.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        },
        justificativa: "Prioriza a consciência situacional ao sequenciar formalmente as atividades e antecipar impactos, mantendo comunicação, cooperação, liderança e decisão em bom nível, mas sem o alinhamento direto entre as áreas que efetivamente gerou o conflito de escopo."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame41,
    descricao:"Durante o planejamento da parada, identificou-se que materiais críticos ainda não foram adquiridos e alguns itens apresentam risco de atraso significativo. A situação ameaça diretamente o início das atividades previstas no cronograma e pode comprometer a execução dos serviços críticos da parada. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Implementar comitê integrado para monitoramento dos materiais críticos, acompanhamento dos riscos de fornecimento, priorização de compras e tratamento antecipado de desvios.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Cria uma estrutura permanente de comunicação entre áreas, com cooperação no acompanhamento contínuo, liderança na priorização de compras, decisões antecipadas baseadas em risco e consciência situacional constante sobre os desvios de fornecimento."
      },
      {
        texto: "Promover análise multidisciplinar para identificar soluções tecnicamente aceitáveis, incluindo reaproveitamento de componentes.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 4,
        },
        justificativa: "A cooperação e a tomada de decisão recebem nota máxima por buscar, em conjunto, soluções técnicas ágeis (como o reaproveitamento de componentes), com comunicação, liderança e consciência situacional em bom nível, porém sem uma estrutura de monitoramento contínuo dos riscos de fornecimento."
      },
      {
        texto: "Realizar acompanhamento sistemático dos processos de aquisição junto aos fornecedores para identificar riscos de atraso e desenvolver planos de contingência.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        },
        justificativa: "Mantém comunicação e cooperação com os fornecedores e desenvolve planos de contingência, mas é uma ação mais reativa e pontual, sem uma governança multidisciplinar, por isso todos os critérios ficam em nível bom, abaixo do patamar do comitê integrado."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame42,
    descricao:"Durante uma reunião de planejamento foi identificado que a lista de raqueteamento possui inconsistências e que diversos materiais necessários para os isolamentos ainda não foram adquiridos. Existe risco de atraso nas liberações operacionais e impacto direto no início das atividades de manutenção. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Constituir uma equipe multidisciplinar envolvendo operação, manutenção, engenharia, planejamento, SMS e suprimentos para monitoramento diário das pendências.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Envolve todas as áreas relevantes, maximizando comunicação e cooperação; a liderança organiza o monitoramento diário, a decisão é compartilhada entre as disciplinas e a consciência situacional é reforçada pelo acompanhamento constante das pendências de raqueteamento."
      },
      {
        texto: "Realizar uma força-tarefa de revisão da lista de raqueteamento.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        },
        justificativa: "Resolve o problema pontual da lista com boa comunicação e cooperação da força-tarefa, mas tem escopo mais restrito que o comitê multidisciplinar diário, mantendo liderança, decisão e consciência situacional em nível bom, não máximo."
      },
      {
        texto: "Solicitar aquisição emergencial dos materiais de raqueteamento.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        },
        justificativa: "É uma resposta rápida e isolada, focada apenas na aquisição, o que reduz a cooperação, a liderança e a qualidade da tomada de decisão, já que não trata a causa das inconsistências na lista, mantendo apenas uma comunicação razoável com os fornecedores."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame43,
    descricao:"Após resolver pendências de alinhamento entre Engenharia e Manutenção, aquisição de materiais críticos e revisão do raqueteamento, a parada avança para a fase de preparação das liberações operacionais. Com o cronograma aprovado, contratadas mobilizadas e equipes prontas para atuar nos equipamentos críticos, a reunião diária da pré-parada identifica que várias atividades essenciais de liberação ainda não foram concluídas pela Operação, colocando em risco o início dos serviços. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Implantar sala de controle integrada das liberações operacionais para monitorar pendências, definir prioridades e tomar decisões em tempo real.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Centraliza comunicação e cooperação entre todas as áreas em tempo real, com liderança ativa na definição de prioridades, decisões rápidas baseadas em dados atualizados e alta consciência situacional sobre o andamento das liberações."
      },
      {
        texto: "Promover uma mobilização extraordinária de equipes operacionais, com suporte de outras unidades da refinaria ou de outras refinarias.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        },
        justificativa: "Recebe nota máxima em liderança e consciência situacional por mobilizar recursos externos rapidamente diante do risco de atraso, com comunicação, cooperação e decisão em bom nível, embora sem uma estrutura formal de monitoramento contínuo das liberações."
      },
      {
        texto: "Reprogramar as atividades de manutenção.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        },
        justificativa: "É uma solução mais conservadora que não ataca a causa do atraso nas liberações, reduzindo liderança, tomada de decisão e consciência situacional, mantendo apenas comunicação e cooperação razoáveis ao informar a reprogramação às equipes."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame44,
    descricao:"Durante a execução da parada, a fiscalização identifica atrasos em inspeções, ensaios não destrutivos, rastreabilidade de materiais, aprovação de planos de torque, etc. Algumas contratadas defendem a continuidade dos serviços para evitar impacto no cronograma. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Constituir uma equipe integrada formada por Inspeção, Qualidade, Engenharia, Planejamento, Fiscalização e Contratadas para gerenciamento dos desvios críticos.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Reúne todas as partes interessadas, maximizando comunicação e cooperação; a liderança coordena o grupo, as decisões são compartilhadas com base em risco e a consciência situacional cobre todos os desvios críticos identificados."
      },
      {
        texto: "Implantar um sistema digital integrado de qualidade e rastreabilidade.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        },
        justificativa: "Fortalece principalmente a consciência situacional ao dar visibilidade e rastreabilidade em tempo real aos desvios, mantendo comunicação, cooperação, liderança e decisão em bom nível, mas sem a governança multidisciplinar direta sobre os desvios críticos."
      },
      {
        texto: "Aumentar a frequência das inspeções pela fiscalização e pela coordenação da parada, exigindo a regularização imediata das não conformidades identificadas, sem alterar significativamente a estrutura atual de gestão.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 4,
        },
        justificativa: "Mantém a estrutura de gestão atual, o que limita a comunicação, a cooperação, a liderança e a qualidade da decisão, pois trata os sintomas via cobrança de regularização, ainda que gere algum ganho de consciência situacional pela maior frequência de checagens."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame45,
    descricao:"Diversas atividades críticas encontram-se em andamento simultaneamente durante o pico da parada. Soldadores, inspetores, supervisores e recursos compartilhados passam a ser disputados entre contratos distintos, gerando conflitos de prioridade. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Reunir todos os gerentes envolvidos para definir critérios comuns de priorização dos recursos críticos, por meio da criação de um comitê de gerentes da parada.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Maximiza comunicação e cooperação ao reunir todos os gerentes para critérios comuns, com boa liderança e ampla consciência situacional; a tomada de decisão fica em nível bom por depender de consenso, o que pode ser um pouco mais lento que uma decisão isolada."
      },
      {
        texto: "Estabelecer reuniões entre o coordenador da parada e áreas críticas para decidir rapidamente sobre conflitos de recursos e atividades do caminho crítico.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 4,
        },
        justificativa: "Prioriza a tomada de decisão (nota máxima) ao resolver rapidamente conflitos pontuais do caminho crítico, com boa cooperação, liderança e consciência situacional, mas a comunicação fica mais restrita às áreas críticas, sem o alinhamento amplo entre todos os gerentes."
      },
      {
        texto: "Utilizar a autoridade formal do coordenador da parada para redistribuir recursos imediatamente.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 2,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 3,
        },
        justificativa: "Concentra a decisão na autoridade do coordenador, o que reduz a cooperação por não envolver as demais áreas na definição de critérios; mantém a liderança e a decisão em bom nível, mas comunicação e consciência situacional ficam mais baixas por faltar debate coletivo."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame46,
    descricao:"Após solucionar pendências de escopo, materiais, liberações, qualidade e recursos, a parada entra no pico de execução, com várias contratadas atuando simultaneamente na mesma unidade. Nas reuniões diárias, surgem conflitos de interface: esperas por atividades predecessoras, disputa por áreas e recursos, execução de tarefas sem alinhamento, dúvidas de responsabilidade por correções/retrabalho e impacto crescente no caminho crítico. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Promover reuniões diárias com todas as contratadas, Fiscalização, Planejamento, Operação e Coordenação da Parada para identificar conflitos, alinhar prioridades e resolver interfaces antecipadamente.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Envolve todos os atores da parada diariamente, maximizando comunicação e cooperação; a liderança conduz o alinhamento de prioridades, as decisões antecipam conflitos e a consciência situacional cobre toda a interface entre os contratos."
      },
      {
        texto: "Implementar matriz integrada de responsabilidades e interfaces.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        },
        justificativa: "Fortalece a comunicação ao formalizar responsabilidades e interfaces (nota máxima), mantendo cooperação, liderança e decisão em bom nível, mas é uma ferramenta mais estática, sem a interação diária que amplia ainda mais a consciência situacional."
      },
      {
        texto: "Resolver os conflitos individualmente à medida que surgirem.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        },
        justificativa: "É uma abordagem reativa que trata cada conflito isoladamente, sem construir comunicação, cooperação, liderança, decisão estruturada ou consciência situacional coletiva, resultando em notas medianas em todas as dimensões."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame47,
    descricao:"Durante a inspeção interna de um equipamento crítico, são identificados danos estruturais severos não previstos (trincas e perda excessiva de espessura), exigindo reparos não planejados, materiais específicos indisponíveis e estudos complementares de Engenharia. O desvio ameaça atrasar a partida da unidade, sob forte pressão para manter a data de retorno operacional. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Formar uma força-tarefa multidisciplinar para avaliar alternativas, desenvolver a solução técnica definitiva e implementar o reparo necessário.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Reúne engenharia e demais áreas para avaliar alternativas com ampla comunicação e cooperação; a liderança conduz a força-tarefa, a decisão é baseada em estudo técnico e a consciência situacional considera todos os riscos antes de definir o reparo definitivo."
      },
      {
        texto: "Executar substituição integral ou grande reparo estrutural.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        },
        justificativa: "Prioriza a consciência situacional ao optar por resolver definitivamente o dano estrutural, mantendo comunicação, cooperação, liderança e decisão em bom nível, mas sem passar pela etapa formal de avaliação multidisciplinar de alternativas."
      },
      {
        texto: "Executar reparo temporário de contingência.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 4,
          "consciencia_situacional": 3,
        },
        justificativa: "Foca em manter o cronograma com uma solução paliativa, o que preserva razoavelmente a tomada de decisão diante da pressão de prazo, mas reduz comunicação, cooperação e consciência situacional, pois não trata a causa raiz do dano estrutural."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame48,
    descricao:"Após a conclusão dos serviços de manutenção, a unidade encontra-se em fase de partida operacional. Durante a preparação para introdução de carga na unidade, são identificadas inconsistências entre a condição planejada e a condição real dos sistemas. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Realizar inspeção integrada de campo envolvendo operação, manutenção, engenharia, inspeção e SMS para validar a condição real dos sistemas antes da partida.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Envolve operação, manutenção, engenharia, inspeção e SMS na validação da condição real, maximizando comunicação e cooperação; a liderança coordena a verificação conjunta, a decisão é baseada em evidência de campo e a consciência situacional é plena antes da partida."
      },
      {
        texto: "Mobilizar uma força-tarefa para eliminação das pendências críticas.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        },
        justificativa: "Mantém comunicação, cooperação e liderança no nível máximo ao mobilizar recursos rapidamente, mas a decisão e a consciência situacional ficam em bom nível por focar apenas nas pendências críticas, sem a validação de campo abrangente das demais áreas."
      },
      {
        texto: "Suspender a partida para revisão documental das pendências.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        },
        justificativa: "É uma decisão cautelosa que preserva bem a comunicação ao suspender a partida, mas a cooperação e a liderança ficam mais baixas por restringir a resposta a uma análise documental, sem o envolvimento direto de campo das demais áreas."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame49,
    descricao:"Na partida da unidade, sob forte pressão de prazo, uma bomba crítica apresenta forte vibração, queda de vazão, aquecimento dos selos e sinais de cavitação. A investigação inicial identifica a causa: uma raquete de manutenção permaneceu instalada na linha de sucção. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Criar uma comissão para investigar a causa da falha, eliminar os desvios e autorizar nova partida somente após validação técnica.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 5,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Investiga a causa raiz de forma estruturada com ampla comunicação e cooperação entre áreas; a liderança formaliza a comissão, a decisão de só reiniciar após validação técnica é criteriosa e a consciência situacional cobre todo o histórico do desvio."
      },
      {
        texto: "Interromper a partida, verificar fisicamente os isolamentos e confirmar a remoção de todos os dispositivos temporários.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        },
        justificativa: "Prioriza a consciência situacional ao checar fisicamente os isolamentos, com comunicação, cooperação, liderança e decisão em bom nível, mas sem a investigação formal e aprofundada da causa que a comissão realizaria."
      },
      {
        texto: "Prosseguir a operação com ajustes julgados necessários pela coordenação.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 1,
          "consciencia_situacional": 2,
        },
        justificativa: "É a alternativa mais arriscada, pois ignora a causa raiz já identificada (raquete esquecida na sucção) e prossegue sob pressão de prazo, resultando em notas baixas em cooperação, liderança e principalmente em tomada de decisão (nota mínima) e consciência situacional, mantendo apenas alguma comunicação ao informar os ajustes."
      }
    ]
  },
  {
    subtitle:"Cenário Complexo",
    title:"Planejamento e Execução de uma Parada de Manutenção",
    image:imageGame50,
    descricao:"A unidade já se encontra operando normalmente após a partida. Entretanto, durante os primeiros dias da campanha operacional, surgem diversas pendências remanescentes. Qual a decisão da equipe?",
    opcoes: [
      {
        texto: "Criar um grupo integrado de tratamento das pendências da pós-parada, consolidando todas as pendências remanescentes em uma única estrutura de gestão envolvendo operação, manutenção, inspeção, engenharia e contratadas.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        },
        justificativa: "Esta é a alternativa que melhor atende às habilidades NOTECH. Consolida todas as pendências em uma estrutura única envolvendo todas as áreas, maximizando comunicação e cooperação; a liderança e a decisão ficam em bom nível por distribuir a gestão entre várias frentes, e a consciência situacional é ampla ao mapear todas as pendências remanescentes."
      },
      {
        texto: "Manter a estrutura de governança da parada até a eliminação das pendências críticas.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        },
        justificativa: "Prioriza a liderança (nota máxima) ao manter a governança já estabelecida até resolver as pendências críticas, com comunicação, cooperação e decisão em bom nível, mas com consciência situacional um pouco menor por não consolidar as pendências em uma nova visão integrada."
      },
      {
        texto: "Encerrar formalmente a parada e transferir todas as pendências para o fluxo normal de manutenção.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 4,
          "consciencia_situacional": 3,
        },
        justificativa: "Reduz cooperação e liderança ao dissolver rapidamente a estrutura da parada, mantendo uma decisão razoável de seguir o fluxo padrão de manutenção, mas com menor consciência situacional e comunicação sobre o destino das pendências remanescentes."
      }
    ]
  }
]
}
]

  gameData.forEach((item) => {
    item.cenario1.forEach((cenario, index) => {
      cenario.opcoes = seededShuffle(cenario.opcoes, index + 1);
    });
    item.cenario2.forEach((cenario, index) => {
      cenario.opcoes = seededShuffle(cenario.opcoes, index + 1);
    });
    item.cenario3.forEach((cenario, index) => {
      cenario.opcoes = seededShuffle(cenario.opcoes, index + 1);
    });
    item.cenario4.forEach((cenario, index) => {
      cenario.opcoes = seededShuffle(cenario.opcoes, index + 1);
    });
  });

export default gameData;