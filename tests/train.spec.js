
//train  ticket bookig testing file
import { test, expect } from '@playwright/test';

test.describe('Train Ticket Booking', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.confirmtkt.com');
  });
});
    
