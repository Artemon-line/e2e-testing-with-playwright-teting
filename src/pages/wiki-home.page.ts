import { Locator, Page } from '@playwright/test';
import { Fixture, Given, When, Then } from 'playwright-bdd/decorators';
import type { test } from '../fixtures/pages';
import { BasePage } from './base.page';

export
@Fixture<typeof test>('wikiHomePage')
class WikiHomePage implements BasePage {
  url = 'https://www.wikipedia.org';

  readonly searchBar: { input: Locator; button: Locator };

  constructor(public page: Page) {
    this.searchBar = {
      input: page.locator('#searchInput'),
      button: page.locator('button[type="submit"]')
    };
  }

  @Given('I am on home page')
  async goto() {
    await this.page.goto(this.url);
  }

  @When('I search for {string}')
  async doSearch(name: string) {
    await this.searchBar.input.fill(name);
    await this.searchBar.button.click();
  }
}
