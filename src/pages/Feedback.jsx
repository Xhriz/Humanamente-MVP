import image1 from "../assets/Image/2.png";
import imageProfile from "../assets/Image/historico.png";
import imageTeam from "../assets/Image/equip.png";
import Header from "../components/Header";
import SkillsRadarChart from "../components/SkillsRadarChart";
import feedbackText from "../feedbackText";

export default function Feedback({onMenu, restart, profileName, scores, selfAssessmentScores, onLogout}) {
  const calculateAverageScore = () => {
    const scoresArray = [
      scores?.lideranca || 0,
      scores?.cooperacao || 0,
      scores?.comunicacao || 0,
      scores?.tomada_decisao || 0,
      scores?.consciencia_situacional || 0,
    ];
    const sum = scoresArray.reduce((acc, val) => acc + val, 0);
    return sum / 5;
  };

  const getTextIndex = () => {
    const average = calculateAverageScore();
    if (average >= 4) return 0;
    if (average >= 3) return 1;
    if (average >= 2) return 2;
    if (average >= 1) return 3;
    return 4;
  };

  const handleDownloadPDF = async () => {
    try {
      // Aguarda as bibliotecas carregarem
      await new Promise(resolve => {
        if (window.html2canvas && window.jspdf) {
          resolve();
        } else {
          let attempts = 0;
          const interval = setInterval(() => {
            attempts++;
            if (window.html2canvas && window.jspdf) {
              clearInterval(interval);
              resolve();
            }
            if (attempts > 30) {
              clearInterval(interval);
              throw new Error('Bibliotecas não carregaram');
            }
          }, 100);
        }
      });

      const feedbackElement = document.querySelector('.feedback');
      if (!feedbackElement) {
        throw new Error('Elemento feedback não encontrado');
      }

      // Clona o elemento
      const clone = feedbackElement.cloneNode(true);

      // Remove apenas botões
      const buttons = clone.querySelectorAll('.feedback__button, .feedback__restart');
      buttons.forEach(btn => btn.remove());

      // Adiciona o clone fora de vista
      clone.style.position = 'fixed';
      clone.style.left = '-10000px';
      clone.style.top = '-10000px';
      clone.style.visibility = 'visible';
      document.body.appendChild(clone);

      // Aguarda render completo
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Captura COM CORES ORIGINAIS
      const canvas = await window.html2canvas(clone, {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#090f1a',
        logging: false,
        imageTimeout: 15000,
        windowHeight: clone.scrollHeight + 300,
        windowWidth: clone.scrollWidth + 200
      });

      // Remove clone
      document.body.removeChild(clone);

      // Aumenta contraste/brilho da imagem
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Aumenta brilho em 30%
        data[i] = Math.min(255, data[i] * 1.3);      // Red
        data[i + 1] = Math.min(255, data[i + 1] * 1.3); // Green
        data[i + 2] = Math.min(255, data[i + 2] * 1.3); // Blue
        // Alpha não muda
      }

      ctx.putImageData(imageData, 0, 0);

      const imgData = canvas.toDataURL('image/png', 1.0);
      const jsPDF = window.jspdf.jsPDF;
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - 10;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let currentPosition = 5;
      pdf.addImage(imgData, 'PNG', 5, currentPosition, imgWidth, imgHeight);

      let remainingHeight = imgHeight - pageHeight;
      while (remainingHeight > 0) {
        pdf.addPage();
        currentPosition -= pageHeight;
        pdf.addImage(imgData, 'PNG', 5, currentPosition, imgWidth, imgHeight);
        remainingHeight -= pageHeight;
      }

      pdf.save(`Feedback-${profileName}-${Date.now()}.pdf`);
      

    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert(`❌ Erro ao gerar PDF:\n${error.message}`);
    }
  };

  const textIndex = getTextIndex();

  return (
    <div>
    <Header profileName={profileName} onLogout={onLogout} />
            <main className="feedback">
               <div className="feedback__header">
                <div>
                <h2 className="feedback__title">Feedback do Treinamento</h2>
                <p className="feedback__text">Avaliação das suas competências não técnicas.</p>
                </div>
                <div className="feedback__results">
                <button className="feedback__button" onClick={handleDownloadPDF}>⭳ PDF</button>
                <button className="feedback__button" onClick={restart}>Reiniciar</button>
                </div>
               </div>
               <div className="feedback__report">
                <div className="feedback__report-block">
                  <h3 className="feedback__report-title">Relatório Operacional</h3>
                  <p className="feedback__report-description">Análise lógica baseada no seu desempenho</p>
                  <p className="feedback__report-text">{feedbackText[textIndex].text}</p>
                </div>
                <div className="feedback__block">
                <div className="feedback__skills">
                  <h3 className="feedback__skills-title">Indicadores Não Técnicos</h3>
                  <p className="feedback__skills-text">Resultados consolidados</p>
                  <SkillsRadarChart scores={scores} selfAssessmentScores={selfAssessmentScores}/>
                </div>
                <button className="feedback__restart" onClick={onMenu}>Terminar Treinamento</button>
               </div>
               </div>
            </main>
    </div>
  );
}