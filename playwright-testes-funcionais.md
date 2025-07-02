
# ✅ Testes Funcionais com Playwright – API de Livros (Front-end)

Este documento descreve como configurar e executar testes funcionais com o [Playwright](https://playwright.dev/) para verificar as quatro operações (CRUD) da API de livros via interface front-end.

---

## 1. Instalação do Playwright

Execute os seguintes comandos no terminal:

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

---

## 2. Estrutura dos Testes

Crie um diretório chamado `tests/` com o seguinte arquivo:

`tests/livros.spec.ts`

```ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5500'; // ajuste conforme sua aplicação

test.describe('CRUD de Livros via Front-End', () => {

  test('Criar um novo livro', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#titulo', 'Livro Teste');
    await page.fill('#autor', 'Autor Teste');
    await page.fill('#anoPublicacao', '2025');
    await page.click('button:has-text("Adicionar Livro")');
    await expect(page.locator('#bookList')).toContainText('Livro Teste');
  });

  test('Editar um livro existente', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('button:has-text("Editar")');
    await page.fill('#titulo', 'Livro Editado');
    await page.click('button:has-text("Atualizar Livro")');
    await expect(page.locator('#bookList')).toContainText('Livro Editado');
  });

  test('Excluir um livro existente', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('button:has-text("Excluir")');
    // Pode ser necessário lidar com alert de confirmação
    page.on('dialog', dialog => dialog.accept());
    await expect(page.locator('#bookList')).not.toContainText('Livro Editado');
  });

  test('Listar livros existentes', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#bookList')).toBeVisible();
  });

});
```

---

## 3. Executando os testes

```bash
npx playwright test
```

Você verá no terminal os resultados dos testes executados, com status de sucesso ou falha.

---

## 4. Observações

- Certifique-se de que o front-end esteja rodando localmente.
- Use `npx playwright show-report` para abrir um relatório interativo dos testes.

---

Feito para garantir que todas as operações da API estejam funcionando corretamente pelo front-end! 🚀
