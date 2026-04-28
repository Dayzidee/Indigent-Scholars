import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // Default for existing tests
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['line'],
  ],
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },

  projects: [
    // ── Existing test suites ─────────────────────────────────────────────────
    {
      name: 'Desktop Chromium',
      testMatch: /tests\/(?!perf\/).*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chromium (iPhone 13)',
      testMatch: /tests\/(?!perf\/).*\.spec\.ts/,
      use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' },
    },
    {
      name: 'Mobile Chromium (iPhone SE - Overflow Check)',
      testMatch: /tests\/(?!perf\/).*\.spec\.ts/,
      use: { ...devices['iPhone SE'], defaultBrowserType: 'chromium' },
    },

    // ── Performance Suite ────────────────────────────────────────────────────
    // Runs serially on Desktop Chrome only.
    // Parallelism distorts timing measurements.
    {
      name: 'Performance Suite',
      testMatch: /tests\/perf\/.*\.spec\.ts/,
      timeout: 120_000, // performance tests need more time
      use: {
        ...devices['Desktop Chrome'],
        // Disable animations for consistent timing
        launchOptions: {
          args: ['--disable-gpu-vsync', '--disable-background-timer-throttling'],
        },
      },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
