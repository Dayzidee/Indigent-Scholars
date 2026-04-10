import { test, expect } from '@playwright/test';

test.describe('Authentication & Role-Based Access Control', () => {
  
  test.beforeEach(async ({ page }) => {
    // Log console messages for debugging
    page.on('console', msg => {
      console.log(`BROWSER CONSOLE: ${msg.text()}`);
      if (msg.type() === 'error') {
        console.error(`BROWSER ERROR: ${msg.text()}`);
      }
    });

    // Handle dialogs/alerts if any
    page.on('dialog', dialog => dialog.dismiss());
  });

  test('unauthenticated user is redirected from dashboard to login', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });

  test('student can sign in and is protected from sponsor routes', async ({ page, context }) => {
    // 1. Sign in as student
    await page.goto('/login');
    await page.fill('#email', 'inuoluwadunsimis@gmail.com');
    await page.fill('#password', 'dunsimi03');
    await page.click('#login-submit-btn');

    // Wait for the redirect to complete
    await page.waitForURL(/\/dashboard\/student/);
    await expect(page).toHaveURL(/\/dashboard\/student/);

    // 2. Attempt to access sponsor route
    await page.goto('/dashboard/sponsor');
    
    // 3. Verify redirected back to student dashboard (RBAC)
    await page.waitForURL(/\/dashboard\/student/);
    await expect(page).toHaveURL(/\/dashboard\/student/);
  });

  test('sponsor can sign in and is protected from student routes', async ({ page }) => {
    // 1. Sign in as sponsor
    await page.goto('/login');
    await page.fill('#email', 'inudoyin@gmail.com');
    await page.fill('#password', 'dunsimi03');
    await page.click('#login-submit-btn');

    // Wait for the redirect to complete
    await page.waitForURL(/\/dashboard\/sponsor/);
    await expect(page).toHaveURL(/\/dashboard\/sponsor/);

    // 2. Attempt to access student route
    await page.goto('/dashboard/student');
    
    // 3. Verify redirected back to sponsor dashboard (RBAC)
    await page.waitForURL(/\/dashboard\/sponsor/);
    await expect(page).toHaveURL(/\/dashboard\/sponsor/);
  });

  test('protected admin routes redirect unauthenticated users', async ({ page }) => {
    await page.goto('/admin');
    await expect(page).toHaveURL(/\/login/);
  });
});
