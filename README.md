# 🎭 E2E Testing with Playwright

This repository contains examples and configurations for using the [Playwright](https://playwright.dev/) tool to perform end-to-end (E2E) testing. Playwright is a powerful framework for testing web applications across multiple browsers with ease.

---

## 🚀 Features

- **Cross-Browser Testing**: Run tests on Chromium, Firefox, and WebKit.
- **Parallel Execution**: Speed up your test runs with parallel execution.
- **Trace Viewer**: Debug failed tests with detailed traces.
- **CI Integration**: Pre-configured GitHub Actions workflow for automated testing.
- **TypeScript Support**: Write tests with TypeScript for better type safety.

---

## 📂 Project Structure

```plaintext
.
├── .github/workflows/         # CI/CD workflows for GitHub Actions
├── [playwright.config.ts](http://_vscodecontentref_/1)       # Playwright configuration file
├── tests/                     # Directory for test files
├── tests-examples/            # Example test cases
├── playwright-report/         # HTML reports generated after test runs
├── test-results/              # Test artifacts (e.g., traces, screenshots)
├── [package.json](http://_vscodecontentref_/2)               # Project dependencies and scripts
└── [README.md](http://_vscodecontentref_/3)                  # Project documentation