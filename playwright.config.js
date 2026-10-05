const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: false, // Abre o navegador visualmente ao executar
  },
});