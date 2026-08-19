<div align="center">

# Playwright Test Automation

**A TypeScript test automation project for practicing reliable browser testing with Playwright.**

[![Playwright](https://img.shields.io/badge/Playwright-Test-2ead33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Browsers](https://img.shields.io/badge/Browsers-Chromium%20%7C%20Firefox-555555)](https://playwright.dev/docs/browsers)

</div>

## Overview

This repository contains hands-on examples for browser automation using [Playwright Test](https://playwright.dev/docs/test-intro) and TypeScript. The tests cover page assertions, URL validation, and accessible element locators across Chromium and Firefox. Each run produces both Playwright HTML results and Allure test-result data.

> **Note:** The examples currently target public demonstration websites. An internet connection is required, and tests may be affected by changes or availability of those websites.

## Table of contents

- [Technology stack](#technology-stack)
- [Getting started](#getting-started)
- [Running tests](#running-tests)
- [Test coverage](#test-coverage)
- [Reports and debugging](#reports-and-debugging)
- [Configuration](#configuration)
- [Project structure](#project-structure)
- [Useful commands](#useful-commands)

## Technology stack

| Technology | Purpose |
| --- | --- |
| [Playwright](https://playwright.dev/) | Cross-browser end-to-end testing |
| [Playwright Test](https://playwright.dev/docs/test-intro) | Test runner, assertions, fixtures, and reporting |
| [Allure Report](https://allurereport.org/) | Rich test reporting and result history |
| [TypeScript](https://www.typescriptlang.org/) | Typed test development |
| Node.js and npm | Runtime and dependency management |

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository and change into the project directory.
2. Install the project dependencies:

	```bash
	npm install
	```

3. Install the Playwright browser binaries:

	```bash
	npx playwright install
	```

## Running tests

Run the complete test suite:

```bash
npx playwright test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
```

Run a specific test file:

```bash
npx playwright test tests/mytest.spec.ts
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run tests interactively in Playwright UI mode:

```bash
npx playwright test --ui
```

## Test coverage

| Test file | Coverage |
| --- | --- |
| `tests/login.spec.ts` | Verifies login and logout on Practice Test Automation |
| `tests/test-table.spec.ts` | Verifies Automation Courses language filters |

## Reports and debugging

The project uses both Playwright's HTML reporter and the Allure reporter.

Open the latest Playwright HTML report after a test run:

```bash
npx playwright show-report
```

Generate an Allure HTML report from the latest results:

```bash
npx allure generate allure-results --clean -o allure-report
```

Open the generated Allure report:

```bash
npx allure open allure-report
```

Or generate and open an Allure report in one command:

```bash
npx allure serve allure-results
```

For step-by-step debugging, run a test in debug mode:

```bash
npx playwright test tests/mytest.spec.ts --debug
```

Generated Playwright reports are stored in `playwright-report/`. Allure result files are stored in `allure-results/`, and generated Allure reports are stored in `allure-report/`. Failure artifacts, including error context and traces when applicable, are stored in `test-results/`.

## Configuration

The test configuration is defined in `playwright.config.ts` and currently:

- Discovers tests in `tests/`.
- Runs tests fully in parallel locally.
- Runs tests in Chromium and Firefox.
- Retries failed tests twice in CI.
- Collects a trace on the first retry.
- Generates Playwright HTML and Allure results through a multi-reporter configuration.

WebKit, mobile projects, branded browsers, and a local development server are included as commented configuration examples.

## Project structure

```text
.
├── tests/
│   ├── login.spec.ts
│   └── test-table.spec.ts
├── pages/
│   ├── home.page.ts
│   ├── login.page.ts
│   └── test-table.page.ts
├── package.json
├── playwright.config.ts
├── playwright-report/      # Generated HTML reports
├── allure-results/         # Allure result files
├── allure-report/          # Generated Allure HTML report
└── test-results/           # Generated test artifacts
```

## Useful commands

```bash
# List all discovered tests
npx playwright test --list

# Run tests and update snapshots
npx playwright test --update-snapshots

# View the Playwright version
npx playwright --version

# Generate an Allure report
npx allure generate allure-results --clean -o allure-report
```

## Learning focus

The examples demonstrate:

- Page title and URL assertions with `expect`.
- Semantic locators such as `getByRole`, `getByText`, and `getByAltText`.
- Browser projects and cross-browser execution.
- Playwright HTML and Allure reporting, plus retry traces for troubleshooting failures.
