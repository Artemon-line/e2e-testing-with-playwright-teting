import { expect, Locator, Page } from '@playwright/test';
import { Fixture, When, Then } from 'playwright-bdd/decorators';
import type { test } from '../fixtures/pages';
import { BasePage } from './base.page';

export
@Fixture<typeof test>('wikiTitlePage')
class WikiTitlePage implements BasePage {
  url = 'https://en.wikipedia.org/wiki';

  readonly title: Locator;

  constructor(public page: Page) {
    this.title = page.locator('#firstHeading');
  }

  @When('I open title page for {string}')
  async openTitle(title: string) {
    await this.page.goto(`${this.url}/title`);
  }

  @Then('wiki title page {string} should open')
  async getCurrentTitle(text: string) {
    await expect(this.title).toHaveText(text);
  }
}
