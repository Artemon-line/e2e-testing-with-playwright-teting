# 🎭 E2E Testing with Playwright and BDD

[![Playwright Tests](https://github.com/Artemon-line/e2e-testing-with-playwright-teting/actions/workflows/playwright.yml/badge.svg?branch=main)](https://github.com/Artemon-line/e2e-testing-with-playwright-teting/actions/workflows/playwright.yml)

This repository contains examples and configurations for using the [Playwright](https://playwright.dev/) tool with Behavior-Driven Development (BDD) using [playwright-bdd](https://github.com/streamich/playwright-bdd). Playwright is a powerful framework for testing web applications across multiple browsers with ease, and `playwright-bdd` allows you to write tests in a Gherkin-style syntax.

---

## 🚀 Features

- **Cross-Browser Testing**: Run tests on Chromium, Firefox, and WebKit.
- **BDD Support**: Write tests in Gherkin syntax using `playwright-bdd`.
- **Parallel Execution**: Speed up your test runs with parallel execution.
- **Trace Viewer**: Debug failed tests with detailed traces.
- **CI Integration**: Pre-configured GitHub Actions workflow for automated testing.
- **TypeScript Support**: Write tests with TypeScript for better type safety.

---

## 📂 Project Structure

```plaintext
.
├── .github/workflows/         # CI/CD workflows for GitHub Actions
├── playwright.config.ts       # Playwright configuration file
├── src/
│   ├── features/              # Gherkin feature files
│   ├── steps/                 # Step definitions for BDD
│   ├── pages/                 # Page Object Model (POM) classes
├── tests/                     # Directory for additional test files
├── tests-examples/            # Example test cases
├── playwright-report/         # HTML reports generated after test runs
├── test-results/              # Test artifacts (e.g., traces, screenshots)
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

---

## 🛠️ Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e2e-testing-with-playwright.git
   cd e2e-testing-with-playwright
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```

---

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Feature File
```bash
npx playwright test src/features/example.feature
```

### Debug Mode
```bash
npx playwright test --debug
```

---

## 🖋️ Writing Tests with BDD

### Feature Files

Write your test scenarios in Gherkin syntax under the `src/features/` directory. For example:

```gherkin
# filepath: src/features/homepage.feature
Feature: Homepage

  Scenario: Open the homepage
    Given I am on home page
    Then I should see the title "Wikipedia"
```

### Step Definitions

Define the steps in the `src/steps/` directory. For example:

```typescript
// filepath: src/steps/homepage.steps.ts
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on home page', async function () {
  await this.page.goto('https://www.wikipedia.org/');
});

Then('I should see the title {string}', async function (title: string) {
  const pageTitle = await this.page.title();
  expect(pageTitle).toBe(title);
});
```

---

## 📊 Test Reports

After running tests, an HTML report will be generated in the `playwright-report/` directory. Open it in your browser to view detailed results:
```bash
npx playwright show-report
```

---

## 🖥️ Continuous Integration

This project includes a pre-configured GitHub Actions workflow ([`.github/workflows/playwright.yml`](.github/workflows/playwright.yml)) to automatically run tests on every push or pull request to the `main` or `master` branch.

---

## 📚 Resources

This repository contains examples and configurations for using the [Playwright](https://playwright.dev/) tool with Behavior-Driven Development (BDD) using [playwright-bdd](https://github.com/streamich/playwright-bdd). Playwright is a powerful framework for testing web applications across multiple browsers with ease, and `playwright-bdd` allows you to write tests in a Gherkin-style syntax.
