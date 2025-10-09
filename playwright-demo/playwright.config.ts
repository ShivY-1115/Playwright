import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    retries: 0,
    fullyParallel: true,
    use: {
        headless: false,
        browserName: 'chromium', // You can change this to 'firefox' or 'webkit'
        viewport: { width: 1280, height: 720 },
        screenshot: 'on',
        video: 'retain-on-failure',
    },
});