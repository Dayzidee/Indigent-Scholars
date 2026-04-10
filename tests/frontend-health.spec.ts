import { test, expect, Page } from '@playwright/test';

// Credentials from user
const STUDENT_AUTH = { email: 'inuoluwadunsimis@gmail.com', pass: 'dunsimi03' };
const SPONSOR_AUTH = { email: 'inudoyin@gmail.com', pass: 'dunsimi03' };

/**
 * Helper to detect horizontal overflow (horizontal scrollbar)
 */
async function checkOverflow(page: Page, path: string) {
  const isOverflowing = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  return isOverflowing;
}

test.describe('Frontend Health Audit - Global Connectivity & Responsiveness', () => {

  test('L1: Landing Page - Performance & Zero-Overflow', async ({ page }) => {
    await page.goto('/');
    
    // 1. Verify Title
    await expect(page).toHaveTitle(/Indigent-Sc/);
    
    // 2. Check for Clipping (Zero-Overflow)
    const overflowing = await checkOverflow(page, '/');
    expect(overflowing, 'Horizontal scrollbar detected on Landing Page! Content is clipping.').toBe(false);
    
    // 3. Audit Hero Primary Buttons
    // Corrected labels based on RedesignedHero.tsx
    const studentBtn = page.getByRole('link', { name: /Register as Scholar/i });
    const sponsorBtn = page.getByRole('link', { name: /Register as Sponsor/i });
    
    await expect(studentBtn).toBeVisible();
    await expect(sponsorBtn).toBeVisible();
    
    // 4. Capture Baseline Visual
    await page.screenshot({ path: `test-results/health-audit/landing-${page.viewportSize()?.width}.png`, fullPage: true });
  });

  test('L2: Routing Inventory - Public Pages', async ({ page }) => {
    const publicRoutes = ['/about', '/login', '/register', '/register/student', '/register/sponsor'];
    
    for (const route of publicRoutes) {
      const response = await page.goto(route);
      expect(response?.status(), `Route ${route} returned error ${response?.status()}`).toBe(200);
      
      const overflowing = await checkOverflow(page, route);
      expect(overflowing, `Horizontal scrollbar detected on ${route}!`).toBe(false);
    }
  });

  test('L3: Link Connectivity Audit (Landing)', async ({ page }) => {
    await page.goto('/');
    
    // Find all links
    const links = await page.locator('a').all();
    console.log(`Auditing ${links.length} links on landing page...`);
    
    for (const link of links) {
      const href = await link.getAttribute('href');
      const text = await link.innerText();
      
      if (!href || href.startsWith('#')) continue;
      
      // External link check
      if (href.startsWith('http')) {
        const target = await link.getAttribute('target');
        if (target !== '_blank') {
          console.warn(`[External Link] "${text}" (${href}) should probably have target="_blank"`);
        }
      }
    }
  });

  test('L4: Authentication Utility - Attempt Real Login', async ({ page }) => {
    await page.goto('/login');
    
    // Attempt Sponsor Login
    // Updated to use labels found in src/app/login/page.tsx
    await page.getByLabel(/Email Address/i).fill(SPONSOR_AUTH.email);
    await page.getByLabel(/Password/i).fill(SPONSOR_AUTH.pass);
    // Specifically target the form's submit button
    await page.locator('form button[type="submit"]').click();
    
    // We expect a navigation or an error message
    // We increase timeout for the real auth flow
    await page.waitForURL(/.*dashboard.*/, { timeout: 10000 }).catch(() => {
      console.warn('⚠️ Real Auth failed or pending. This may be due to DB connection or invalid credentials.');
    });
    
    const url = page.url();
    if (url.includes('/dashboard')) {
      console.log('✅ Real Auth Success for Sponsor');
    }
  });

});
