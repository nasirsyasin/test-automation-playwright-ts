<div align="center">

# Playwright Test Automation Practice

**A TypeScript test automation project for practicing reliable browser testing with Playwright.**

[![Playwright](https://img.shields.io/badge/Playwright-Test-2ead33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Browsers](https://img.shields.io/badge/Browsers-Chromium%20%7C%20Firefox-555555)](https://playwright.dev/docs/browsers)

</div>

## Overview

This repository contains hands-on examples for browser automation using [Playwright Test](https://playwright.dev/docs/test-intro) and TypeScript. The tests cover page assertions, URL validation, and accessible element locators across Chromium and Firefox.

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
| `tests/mytest.spec.ts` | Verifies the Google page title |
| `tests/mytest2.spec.ts` | Verifies the Testo page URL |
| `tests/pwlocator.spec.ts` | Practices accessible locators on the nopCommerce demo store |
| `tests/pwlocators.spec.ts` | Reserved for additional locator exercises |

## Reports and debugging

The project uses Playwright's HTML reporter. Open the latest report after a test run:

```bash
npx playwright show-report
```

For step-by-step debugging, run a test in debug mode:

```bash
npx playwright test tests/mytest.spec.ts --debug
```

Generated reports are stored in `playwright-report/`. Failure artifacts, including error context and traces when applicable, are stored in `test-results/`.

## Configuration

The test configuration is defined in `playwright.config.ts` and currently:

- Discovers tests in `tests/`.
- Runs tests fully in parallel locally.
- Runs tests in Chromium and Firefox.
- Retries failed tests twice in CI.
- Collects a trace on the first retry.
- Generates an HTML report.

WebKit, mobile projects, branded browsers, and a local development server are included as commented configuration examples.

## Project structure

```text
.
├── tests/
│   ├── mytest.spec.ts
│   ├── mytest2.spec.ts
│   ├── pwlocator.spec.ts
│   └── pwlocators.spec.ts
├── package.json
├── playwright.config.ts
├── playwright-report/      # Generated HTML reports
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
```

## Learning focus

The examples demonstrate:

- Page title and URL assertions with `expect`.
- Semantic locators such as `getByRole`, `getByText`, and `getByAltText`.
- Browser projects and cross-browser execution.
- HTML reporting and retry traces for troubleshooting failures.
