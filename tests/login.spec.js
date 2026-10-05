const { test, expect } = require('@playwright/test');
const path = require('path');

// Caminho absoluto para abrir o arquivo HTML local
const caminhoHtml = `file://${path.resolve(__dirname, '../index.html')}`;

test('Deve realizar login com sucesso informando credenciais válidas', async ({ page }) => {
  // 1. Abrir a página HTML
  await page.goto(caminhoHtml);

  // 2. Verificar se o título da página está visível
  await expect(page.locator('#titulo')).toHaveText('Login do Aluno');

  // 3. Preencher os campos de usuário e senha
  await page.locator('#usuario').fill('admin');
  await page.locator('#senha').fill('1234');

  // 4. Clicar no botão "Entrar"
  await page.locator('#btn-entrar').click();

  // 5. Validar a mensagem de sucesso
  await expect(page.locator('#mensagem')).toHaveText('Login realizado com sucesso!');
});

test('Deve exibir erro ao informar senha incorreta', async ({ page }) => {
  await page.goto(caminhoHtml);

  await page.locator('#usuario').fill('admin');
  await page.locator('#senha').fill('0000'); // Senha errada
  await page.locator('#btn-entrar').click();

  await expect(page.locator('#mensagem')).toHaveText('Usuário ou senha incorretos!');
});