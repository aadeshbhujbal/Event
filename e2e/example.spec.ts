import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle(/Next.js Enterprise Boilerplate/); 
});

test('title matches exact text', async ({ page }) => {
  await page.goto('./');
  const expectedTitle = 'Next.js Enterprise Boilerplate';
  await expect(page).toHaveTitle(expectedTitle);
});

test('title is empty', async ({ page }) => {
  await page.goto('./');
  await expect(page.title()).toBe('');
});

test('title contains substring', async ({ page }) => {
  await page.goto('./');
  await expect(page.title()).toContain('Next.js');
});
