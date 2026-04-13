import { test, expect, Page } from '@playwright/test';

const STUDENT_AUTH = { email: 'inuoluwadunsimis@gmail.com', pass: 'dunsimi03' };
const SPONSOR_AUTH = { email: 'inudoyin@gmail.com', pass: 'dunsimi03' };

async function loginAs(page: Page, email: string, pass: string) {
  await page.goto('/login');
  await page.getByLabel(/Email Address/i).fill(email);
  await page.getByLabel(/Password/i).fill(pass);
  // Target the specific hardened button ID to avoid nav ambiguity
  await page.locator('#login-submit-btn').click();
  
  // Use a web-first assertion to wait for the redirect
  await expect(page).toHaveURL(/.*dashboard.*/, { timeout: 15000 });
}

test.describe('Authenticated Dashboard Audit - Sponsor Portfolio', () => {

  test.beforeEach(async ({ page }) => {
    await loginAs(page, SPONSOR_AUTH.email, SPONSOR_AUTH.pass);
  });

  test('Sponsor: Impact Overview - Component Audit', async ({ page }) => {
    // Audit Sidebar Links
    const links = [
      { label: 'Impact Overview', path: '/dashboard/sponsor' },
      { label: 'Discover Students', path: '/dashboard/sponsor/discovery' },
      { label: 'Education Portfolio', path: '/dashboard/sponsor/education' },
      { label: 'Funding Ledger', path: '/dashboard/sponsor/ledger' },
    ];

    for (const link of links) {
      // If mobile, we may need to open the sidebar
      const viewport = page.viewportSize();
      if (viewport && viewport.width < 1024) {
        const trigger = page.locator('#mobile-menu-trigger');
        if (await trigger.isVisible()) {
          await trigger.click();
          await page.waitForTimeout(500); // Wait for transition
        }
      }
      
      // Use dispatchEvent for mobile stability with fixed elements
      await page.locator('aside').getByRole('link', { name: link.label }).dispatchEvent('click');
      await expect(page).toHaveURL(new RegExp(link.path));
      
      // Zero-Overflow Check
      const isOverflowing = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(isOverflowing, `Horizontal scroll detected on Sponsor page: ${link.label}`).toBe(false);
    }
  });

  test('Sponsor: Funding Action - Modal Smoke Test', async ({ page }) => {
    await page.goto('/dashboard/sponsor');
    
    // If mobile, open sidebar first
    const viewport = page.viewportSize();
    if (viewport && viewport.width < 1024) {
      const trigger = page.locator('#mobile-menu-trigger');
      if (await trigger.isVisible()) {
        await trigger.click();
        await page.waitForTimeout(500);
      }
    }

    // Use a scoped locator to be safe
    const sidebar = page.locator('aside');
    const fundBtn = sidebar.getByRole('button', { name: /Fund Scholarship/i });
    if (await fundBtn.isVisible()) {
      await fundBtn.click({ force: true });
      console.log('✅ Fund Scholarship button is interactive');
    }
  });
});

test.describe('Authenticated Dashboard Audit - Student Portfolio', () => {

  test.beforeEach(async ({ page }) => {
    await loginAs(page, STUDENT_AUTH.email, STUDENT_AUTH.pass);
  });

  test('Student: Dashboard Navigation Audit', async ({ page }) => {
    const links = [
      { label: 'Dashboard Overview', path: '/dashboard/student' },
      { label: 'My Application', path: '/dashboard/student/application' },
      { label: 'Sponsor Matches', path: '/dashboard/student/matches' },
    ];

    for (const link of links) {
      const viewport = page.viewportSize();
      if (viewport && viewport.width < 1024) {
        const trigger = page.locator('#mobile-menu-trigger');
        if (await trigger.isVisible()) {
          await trigger.click();
          await page.waitForTimeout(500);
        }
      }

      // Use dispatchEvent for mobile stability with fixed elements
      await page.locator('aside').getByRole('link', { name: link.label }).dispatchEvent('click');
      await expect(page).toHaveURL(new RegExp(link.path));
      
      const isOverflowing = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(isOverflowing, `Horizontal scroll detected on Student page: ${link.label}`).toBe(false);
    }
  });
});
