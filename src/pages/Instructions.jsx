import image1 from "../assets/Image/2.webp";
import imageProfile from "../assets/Image/historico.webp";
import imageTeam from "../assets/Image/equip.webp";
import Header from "../components/Header";
import { useScrollTop } from "../hooks/useScrollTop";

export default function Instructions({onLogin, profileName, onLogout, onHome}) {
  useScrollTop();

  return (
    <div>
    <Header profileName={profileName} onLogout={onLogout} onHome={onHome} />
           <main>
            <section className='instructions'>
              <div className="instructions__container">
                <h2 className="instructions__title">Conceitos</h2>
                <p className="instructions__text">1. A concepção deste treinamento foi baseada nos conceitos contidos na IS nº 00-010 - Revisão A da ANAC, no Advisory 120-35D da Federal Aviation Administration (FAA) e na Circular no CAP 720 - Flight Crew Training: Cockpit Resource Management and Line-Oriented Flight Training- LOFT (Treinamento Orientado para Operações em Rota da Civil Aviation Autority do Reino Unido).</p>
                <p className="instructions__text">2. O treinamento da Fase 2 emprega, apropriadamente, o método NOTECH (Non-Technical Skills), que foi criado na aviação, a pedido da Joint Aviation Authorities (JAA), para avaliar e desenvolver as habilidades não técnicas, ou seja, competências comportamentais e cognitivas que influenciam a segurança e o desempenho, além do conhecimento técnico.</p>
                <p className="instructions__text">3. A fase prática deve oportunizar aos participantes exercícios práticos com emprego de gamificação, com o objetivo de desenvolver estratégias para lidar com situações de rotina e de emergência, possibilitando uma análise, a posterior, dos comportamentos evidenciados durante o treinamento.</p>
                <p className="instructions__text">4. A gamificação é uma estratégia que utiliza elementos e mecânicas de jogos em contextos não relacionados a jogos, com o objetivo de aumentar o engajamento, a motivação e o compromisso das pessoas com tarefas, atividades ou objetivos específicos.</p>
                <p className="instructions__text">5. Os principais objetivos da gamificação incluem: </p>
<ul className="instructions__text">
<li>Aumentar o engajamento: Transformar atividades cotidianas em experiências lúdicas e desafiadoras.</li>
<br></br>
<li>Promover a motivação: Utilizar elementos de jogos para motivar ações e promover aprendizagens.</li>
<br></br>
<li>Facilitar o aprendizado: Criar um ambiente de aprendizagem mais prazeroso e produtivo.</li>
<br></br>
<li>Resolver problemas: Aplicar mecânicas de jogos para resolver problemas em situações reais.</li>
</ul>
                <p className="instructions__text">6. Para tanto, serão empregadas metodologias ativas, que têm por objetivo incentivar os integrantes das equipes a aprenderem de forma autônoma e participativa, por meio de problemas e situações reais, realizando tarefas que os estimulem a pensar além, a terem iniciativa, a debaterem, tornando-se responsáveis pela construção do conhecimento.</p>
                <p className="instructions__text">7. Uma dessas metodologias utilizadas está relacionada com a aprendizagem baseada em problema, que é um método de ensino, no qual os alunos resolvem, de forma colaborativa e participativa, situações problema para a construção de novos conhecimentos.</p>
                <p className="instructions__text">8. Os métodos e técnicas do treinamento do HumanaMente colaboram para o desenvolvimento de atitudes e habilidades efetivas para a segurança das operações do refino, gás e fertilizantes.</p>
                <p className="instructions__text">9. Essa fase deve desenvolver o conhecimento e as habilidades não técnicas dos participantes no contexto da operacional da organização, de acordo com os dados de segurança coletados e analisados à luz do campo dos Fatores Humanos.</p>
                <p className="instructions__text">10. A qualidade desta fase depende da atualização contínua do HumanaMente. A relevância deste programa é realçada quando os eventos ocorridos na empresa são integrados ao treinamento sob a forma de estudos de caso.</p>
                <p className="instructions__text">11. A partir de estudos de caso, os trabalhadores desenvolvem um estado de alerta calcado nos eventos pretéritos e na experiência de terceiros. Assim, e mais importante, o treinamento se torna uma via de compartilhamento das medidas de segurança que foram empregadas naquele ambiente operacional estudado.</p>
                <p className="instructions__text">12. A Fase 2, como método auxiliar de validação do HumanaMente, deve fazer uso de um método de avaliação das habilidades não técnicas que disponha de indicadores comportamentais.</p>
                <p className="instructions__text">13. Parte do benefício desse treinamento deriva do fato de a equipe ser capaz de avaliar rapidamente os resultados, positivos ou negativos, das decisões operacionais tomadas durante o treinamento.</p>
                <p className="instructions__text">14. Após a conclusão de cada sessão, deverá ser feito uma valoração de todas as habilidades não técnicas observadas. Isto deverá ser realizado por meio de uma autoavaliação dos participantes, seguido pelo debrifing do facilitador do treinamento.</p>
                <p className="instructions__text">15. Em continuidade à Fase 1 do HumanaMente, o treinamento da Fase 2 está estruturado com base em cenários.</p>
                <p className="instructions__text">16. Para tanto, faz-se necessário para a consolidação dos conceitos das habilidades não técnicas apresentados na Fase 1, a elaboração de cenários que contenham um conjunto de eventos relacionados com a operação diária de uma refinaria/unidade do gás/fertilizante.</p>
                <p className="instructions__text">17. O resultado é uma abordagem que torna as sessões da Fase 2 mais gerenciáveis e fáceis de avaliar, permitindo que o facilitador, ao aplicar os conceitos estudados na Fase 1, concentre-se nos princípios do HumanaMente.</p>
                <p className="instructions__text">18. Na concepção de cenário da Fase 2, os objetivos do HumanaMente devem ser integrados aos conjuntos de eventos. A aplicação de um conjunto de eventos fornece uma análise lógica para os problemas vivenciados em uma operação de refino/gás/fertilizante. Com o cenário estruturado pelo conjunto de eventos, a sua validação é levada a termo pela avaliação do resultado da simulação.</p>
                <p className="instructions__text">19. Esse conjunto de eventos possuem consequências contínuas que devem ser tratadas durante a operação de refino/gás/fertilizante e não podem ser resolvidas simplesmente selecionando e executando uma lista de verificação de uma ocorrência. Esses eventos exigem ações coordenadas de todos os membros da equipe para conclusão bem-sucedida, mas não a ponto de induzir uma falha completa da operação.</p>
                <p className="instructions__text">20. Os problemas apresentados nos conjuntos de eventos tendem a ser relativamente ambíguos, sem uma solução simples, baseada em uma lista de verificação corretiva.</p>
                <p className="instructions__text">21. Um conjunto de eventos adequadamente projetado não tem uma única solução. Em vez disso, ele tem uma série de soluções possíveis e razoáveis.</p>
                <p className="instructions__text">22. O equilíbrio entre habilidades técnicas e coordenação da equipe é essencial. O treinamento deve garantir que os integrantes de uma equipe não apenas executem suas funções com excelência técnica, mas que também trabalhem de maneira coordenada e eficiente para garantir a segurança operacional.</p>
              </div>
              <button className="instructions__button" onClick={onLogin}>Avançar</button>
            </section>
           </main>
    </div>
  );
}