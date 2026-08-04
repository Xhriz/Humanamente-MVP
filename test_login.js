const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/Humanamente-MVP/');
  
  // Clica em "Iniciar Treinamento"
  await page.click('button:has-text("Iniciar Treinamento")');
  await page.waitForLoadState('networkidle');
  
  // Seleciona Facilitador
  await page.selectOption('select.login__select', 'facilitador');
  await page.click('button.login__add-btn');
  
  // Aguarda o campo aparecer
  await page.waitForSelector('input[placeholder="Nome do Participante"]');
  
  // Digita 1 caractere e captura a mensagem
  await page.fill('input[placeholder="Nome do Participante"]', 'J');
  await page.waitForTimeout(500);
  
  const errorMsg = await page.textContent('.login__error-message');
  console.log('Erro com 1 caractere:', errorMsg);
  
  // Digita 3 caracteres
  await page.fill('input[placeholder="Nome do Participante"]', 'Joã');
  await page.waitForTimeout(500);
  const errorMsg2 = await page.textContent('.login__error-message');
  console.log('Erro com 3 caracteres:', errorMsg2);
  
  await browser.close();
})();
