import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/register/student', { waitUntil: 'networkidle' });

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();

  console.log(JSON.stringify(results.violations, null, 2));

  await browser.close();
})();
