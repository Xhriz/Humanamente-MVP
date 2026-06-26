import imageGame from "./assets/Image/game1.png";
import imageGame2 from "./assets/Image/game2.png";
import imageGame3 from "./assets/Image/game3.png";
import imageGame4 from "./assets/Image/game4.png";
import imageGame5 from "./assets/Image/game5.png";
import imageGame6 from "./assets/Image/game6.png";
import imageGame7 from "./assets/Image/game7.png";
import imageGame8 from "./assets/Image/game8.png";
import imageGame9 from "./assets/Image/game9.png";
import imageGame10 from "./assets/Image/game10.png";
//
import imageGame11 from "./assets/Image/game11.png";
import imageGame12 from "./assets/Image/game12.png";
import imageGame13 from "./assets/Image/game13.png";
import imageGame14 from "./assets/Image/game14.png";
import imageGame15 from "./assets/Image/game15.png";
import imageGame16 from "./assets/Image/game16.png";
import imageGame17 from "./assets/Image/game17.png";
import imageGame18 from "./assets/Image/game18.png";
import imageGame19 from "./assets/Image/game19.png";
import imageGame20 from "./assets/Image/game20.png";

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
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame,
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
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Tentar confirmar as leituras analisando histórico de dados (trends, logs) por alguns minutos, esperando ver se a concentração de H₂S se mantém antes de declarar condição anormal.",
        notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame2,
    descricao:"O alarme de gás tóxico é disparado. SMS e brigada são avisados. Parte da equipe se desloca para pontos de reunião. Alguns operadores de campo ainda estão na área, aguardando instruções claras. Como você organiza a resposta inicial:",
    opcoes: [
      {
        texto: "Bloquear imediatamente o acesso à área da B‑98508AB, emitir mensagem de rádio “Ninguém entra na área até nova ordem” e confirmar se há pessoas em campo.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "Priorizar ajuste de processo no painel (corte de carga, redução de temperatura) e deixar a organização de campo para SMS e Supervisor.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "Convidar todos a darem opiniões no rádio antes de qualquer definição, criando uma “discussão aberta” para decidir próximos passos.",
        notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame3,
    descricao:"O painel continua mostrando queda de vazão na B‑98508A, temperatura elevada no topo da fracionadora e instabilidade na pressão. A discussão agora é sobre corte de carga e estabilização da unidade. Como você atua no processo:",
    opcoes: [
      {
        texto: "Reduzir carga da unidade e ajustar refluxo e pressão da coluna, comunicando claramente que o objetivo é estabilizar e reduzir inventário até entender o tamanho do vazamento.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Manter carga por enquanto, ajustando apenas refluxo e controles, para “não impactar a produção” até haver certeza de que é necessário.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 3,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Pedir que a equipe de Engenharia decida sobre a estratégia de carga, enquanto você se concentra em acompanhar apenas os alarmes.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame4,
    descricao:"O SMS autoriza aproximação controlada à área, com uso de respirador autônomo (SCBA) e detector portátil de H₂S. A equipe de campo se posiciona em área segura, à favor do vento, e aguarda instruções sobre inspeção visual da B‑98508A/B e entorno. O que fazer:",
    opcoes: [
      {
        texto: "Reforçar que ninguém se aproxima sem autorização formal de SMS, exigir SCBA e detector portátil, e orientar inspeção visual a partir de posições protegidas.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Permitir aproximação com EPI incompleto, “apenas para ver rápido”, considerando que a concentração de H₂S parece moderada.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Suspender qualquer inspeção de campo até que todos os alarmes caiam, mantendo equipe apenas em posição de espera.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame5,
    descricao:"A inspeção (quando ocorre) revela que há vazamento significativo na região da B‑98508A, possivelmente relacionado a falha de selagem. O operador informa que há líquido escorrendo próximo à bomba e possibilidade de emissão de H₂S e hidrocarbonetos. Qual sua decisão:",
    opcoes: [
      {
        texto: "Isolar a bomba: ordenar fechamento das válvulas de sucção e descarga, solicitar desenergização elétrica da B‑98508A e reforçar cordão de segurança com brigada.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Tentar reestabelecer a operação da bomba ajustando apenas controles no painel, sem isolar imediatamente, para ver se a condição melhora.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Focar apenas em monitorar os detectores de H₂S e deixar a questão da bomba para manutenção decidir depois.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
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
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Focar apenas na interação com SMS, deixando de lado campo e painel, acreditando que “o importante é a segurança, o resto eles se viram”.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame7,
    descricao:"A situação evolui e, por segurança, há forte indicação de corte total da carga fresca da unidade, conforme o cenário oficial (trip de bomba crítica, vazamento com H₂S, instabilidade). É necessário decidir o tipo de parada (emergencial vs. controlada). Sua decisão será:",
    opcoes: [
      {
        texto: "Confirmar corte de carga com painel, comunicar imediatamente Supervisor, Operadores de campo e SMS, e propor parada controlada se a situação estiver estabilizada.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Defender parada emergencial imediata, mesmo com algumas informações ainda incompletas, priorizando risco zero.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Adiar qualquer definição de tipo de parada até “mais dados” estarem disponíveis, mantendo a discussão aberta.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame8,
    descricao:"Com a carga cortada, o nível do V‑98503 começa a subir devido a retornos e ajustes de V‑13. É necessário monitorar cuidadosamente para evitar transbordo ou condição de nível descontrolado. Sua atitude será:",
    opcoes: [
      {
        texto: "Verificar desempenho de forno, estabilidade de carga e utilidades, ajustando V‑13 e outras variáveis para manter o nível dentro de faixa segura.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Tratar o aumento de nível como algo secundário, acreditando que “vai estabilizar sozinho” depois que o vazamento for resolvido.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Delegar completamente a análise de níveis à equipe de outra unidade, sem acompanhar ativamente.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame9,
    descricao:"Após controlar vazamentos e pressões, a equipe precisa decidir como será o encaminhamento do equipamento e da unidade: limpeza, descoque, inspeções, reparos. O que fazer:",
    opcoes: [
      {
        texto: "Planejar, junto com Manutenção e Engenharia, um roteiro de inspeção, limpeza e eventual descoque, integrando lições aprendidas do evento.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Propor um retorno rápido à operação, minimizando o tempo de parada, dando pouca ênfase ao aprendizado do evento.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Deixar o encaminhamento totalmente nas mãos da manutenção, sem participar ativamente da definição.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Vazamento e Alarme de  H₂S",
    image:imageGame10,
    descricao:"O evento foi controlado, a unidade foi estabilizada e as pessoas estão seguras. Agora, o foco é o debriefing, prática central do HumanaMente Fase 2. Sua decisão será:",
    opcoes: [
      {
        texto: "Participar ativamente do debriefing, revisando decisões, comunicação, coordenação e propondo melhorias nas habilidades não técnicas.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "Tratar o debriefing como formalidade, com participação mínima, mas presença física.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "Evitar o debriefing, priorizando “voltar logo para a rotina”.",
      notech:{
          "comunicacao": 1,
          "cooperacao": 1,
          "lideranca": 1,
          "tomada_decisao": 1,
          "consciencia_situacional": 3,
        }
      }
    ]
  }
  ],
















  cenario2:[
{
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame11,
    descricao:"Na fase de Elaboração do Plano de Bloqueio e Raqueteamento, identificou-se que houve uma falha na identificação de um ponto de isolamento, onde uma raquete deveria ser inserida para isolar de uma determinada torre. Deverá ser feito:",
    opcoes: [
      {
        texto: "Suspender temporariamente a aprovação do plano de raqueteamento daquela torre específica e sinalizar no sistema (ou prontuário físico) que o circuito está em revisão regulatória.",
        notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 5,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "A engenharia de manutenção deve calcular/validar a espessura da nova raquete com base na pressão e temperatura de projeto daquela linha específica para garantir que ela suportará o bloqueio. ",
        notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "O supervisor de operação e o técnico de inspeção de equipamentos devem ir ao campo especificamente no flange esquecido.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame12,
    descricao:"O caldeireiro, por uma falha de comunicação e sem aguardar a emissão da devida permissão de trabalho, inicia atividades raqueteamento em uma caldeira sem a verificação dos riscos operacionais e sem o controle de segurança. A documentação de risco não foi validada para essa atividade específica. Como você organiza a resposta inicial:",
    opcoes: [
      {
        texto: "O Supervisor deve imediatamente parar a atividade, comunicar ao operador e questionar o caldeireiro sobre a permissão de trabalho.",
        notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 5,
          "tomada_decisao": 4,
          "consciencia_situacional": 5,
        }
      },
      {
        texto: "O Supervisor deve verificar se os riscos associados à atividade do caldeireiro estão identificados na documentação de riscos e garantir que os procedimentos sejam seguidos.",
        notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "O caldeireiro não precisava aguardar a emissão da permissão de trabalho para realizar uma atividade relacionada ao raqueteamento.",
        notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame13,
    descricao:"Atenção! Foi detectada a presença de gás inflamável na área pelos sensores de gás, com os alarmes acionados. Qual a melhor decisão:",
    opcoes: [
      {
        texto: "O Supervisor deve coordenar imediatamente a evacuação da área afetada e comunicar o incidente ao COTUR.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "A Equipe de Segurança deve ativar o sistema de supressão de incêndios e realizar a monitorização contínua de gases inflamáveis. ",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 3,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "O caldeireiro somente deve ser removido da área e instruído sobre os procedimentos corretos de segurança e permissões de trabalho.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame14,
    descricao:"Durante a revisão da documentação de riscos, a equipe de planejamento não identificou um risco crítico existente relacionado ao sistema de vácuo do regenerador, que pode causar problemas de pressão durante a parada. Qual a melhor decisão:",
    opcoes: [
      {
        texto: "Convocar equipe multidisciplinar: Coordenador de planejamento, Gerente da parada, Grupo de Planejamento da Intervenção, Grupo de Planejamento de Manutenção, Planejador de materiais, SMS. Focar no sistema de regenerador e sistemas auxiliares. Se um risco crítico escapou, todo o estudo precisa de revalidação. ",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Acionar a equipe de Segurança de Processo e abrir desvio no sistema de gestão e tratar como incidente de quase-perda na fase de planejamento.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Fazer um comunicado formal para o Grupo de Planejamento de Manutenção bloqueando intervenções na unidade até reanálise concluída.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame15,
    descricao:"Tendo em vista que a elaboração das matrizes de Libra foi copiada da parada anterior sem a devida revisão da Lista de Bloqueios e sem considerar a atualização da planta, a Lista de Bloqueios está desatualizada. Qual a melhor decisão:",
    opcoes: [
      {
        texto: "Solicitar ao Coordenador de planejamento todas as Gestões de Mudanças implementadas desde a última parada para atualizar as matrizes de Libra.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Fazer uma vistoria na área para conferir todas as etiquetas, posição, acessibilidade, estado de cada válvula de bloqueio, dreno, raquetes, etc.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Montar força-tarefa multidisciplinar para refazer LIBRA.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame16,
    descricao:"Identificou-se a necessidade de identificar os riscos potenciais e introduzir medidas de controle para sua redução ou eliminação do risco ambiental durante a redução da carga para a parada de manutenção. Qual a melhor decisão:",
    opcoes: [
      {
        texto: "Na redução de carga da FCC têm-se pouco tempo e muito transiente. Deve-se focar em medidas de controle já existentes, sem depender de obra ou novos projetos, descrevendo uma lista de ações corretivas em caso de falha na identificação de um risco ambiental.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "A Gerência de SMS deve revisar a documentação de riscos e garantir que todos os riscos possíveis estejam corretamente identificados.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Monitorar a unidade, comprovando que a fumaça do flare/chaminé do regenerador ficou dentro do padrão permitido pela licença de operação. Serve como contraprova se houver denúncia da comunidade ou auto de órgão ambiental.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 3,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame17,
    descricao:"A tarefa é reduzir gradualmente a carga da unidade mantendo o controle das variáveis da unidade. O ajuste correto da proporção de ar e vapor é crucial para garantir uma combustão eficiente e segura. Qual a melhor decisão:",
    opcoes: [
      {
        texto: "Redução gradual da carga.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Ajuste de circulação de catalisador.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Controle de ar e vapor.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame18,
    descricao:"Durante uma redução de carga para 1.000–1.500 m³/d, as temperaturas das fases densa e diluída caíram para um patamar próximo a 620°C. Qual a melhor decisão:",
    opcoes: [
      {
        texto: "Uma temperatura de regenerador próxima de 620 °C não exige, necessariamente, uma parada, mas costuma ser um sinal de que a unidade está se aproximando do limite inferior do balanço térmico.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Aumentar a circulação de catalisador para transportar mais calor ao reator.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "Interromper temporariamente a redução de carga.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 2,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame19,
    descricao:"Durante um ajuste de vapor e ar, o operador de painel faz um ajuste inadequado na proporção, resultando em um aumento inesperado na temperatura de combustão no regenerador. Qual a melhor decisão:",
    opcoes: [
      {
        texto: "Retornar a vazão para o valor anterior ou para a faixa prevista no procedimento operacional.",
      notech:{
          "comunicacao": 4,
          "cooperacao": 5,
          "lideranca": 4,
          "tomada_decisao": 4,
          "consciencia_situacional": 4,
        }
      },
      {
        texto: "Reduzir gradualmente o excesso de ar que provocou a elevação da combustão, monitorar atentamente O₂, CO e as temperaturas das fases densa e diluída, e verificar continuamente a ocorrência de queima descontrolada e indesejada de gases de combustão.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      },
      {
        texto: "O supervisor de turno deve avaliar o impacto da falha e determinar se há risco de danos ao equipamento, considerando uma possível necessidade de reduzir ainda mais a produção.",
      notech:{
          "comunicacao": 2,
          "cooperacao": 3,
          "lideranca": 2,
          "tomada_decisao": 2,
          "consciencia_situacional": 2,
        }
      }
    ]
  },
  {
    subtitle:"Operação em Equipe - Simples",
    title:"Parada de Manutenção Programada",
    image:imageGame20,
    descricao:"O ajuste não foi corrigido rapidamente, e a temperatura de combustão ultrapassa o limite de segurança, aumentando o risco de danos térmicos aos componentes do regenerador. Qual a melhor decisão:",
    opcoes: [
      {
        texto: "O operador de painel deve ativar o sistema de resfriamento de emergência do regenerador.",
      notech:{
          "comunicacao": 5,
          "cooperacao": 4,
          "lideranca": 4,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "Preparar antecipação da parada, suspendendo imediatamente a carga fresca e isolando fontes de hidrocarboneto.",
      notech:{
          "comunicacao": 3,
          "cooperacao": 3,
          "lideranca": 3,
          "tomada_decisao": 3,
          "consciencia_situacional": 3,
        }
      },
      {
        texto: "Acionar a parada emergencial para proteger a integridade do equipamento e comunicar a situação ao departamento de manutenção.",
      notech:{
          "comunicacao": 1,
          "cooperacao": 1,
          "lideranca": 1,
          "tomada_decisao": 1,
          "consciencia_situacional": 1,
        }
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
  });

export default gameData;
