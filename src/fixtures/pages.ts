import { test as base } from 'playwright-bdd';
// import { Wi } from './TodoPage';
// import { AdminTodoPage } from './AdminTodoPage';

import { WikiHomePage } from '../pages/wiki-home.page';
import { WikiTitlePage } from '../pages/wiki-title.page';

type Fixtures = {
  wikiTitlePage: WikiTitlePage;
  wikiHomePage: WikiHomePage;
};

export const test = base.extend<Fixtures>({
  wikiHomePage: async ({ page }, use) => use(new WikiHomePage(page)),
  wikiTitlePage: async ({ page }, use) => use(new WikiTitlePage(page))
});
