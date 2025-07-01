import { test, expect } from '@playwright/test';

test('Adicionar, editar e excluir livro', async ({ page }) => {
  await page.goto('http://localhost:5500');

  await page.fill('#titulo', 'Playwright Livro');
  await page.fill('#autor', 'Autor Teste');
  await page.fill('#anoPublicacao', '2023');
  await page.click('text=Adicionar Livro');
  await expect(page.locator('text=Playwright Livro')).toBeVisible();

  await page.click('text=Editar');
  await page.fill('#titulo', 'Livro Editado');
  await page.click('text=Atualizar Livro');
  await expect(page.locator('text=Livro Editado')).toBeVisible();

  await page.click('text=Excluir');
  await page.waitForTimeout(500);
});
