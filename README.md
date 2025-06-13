# Steam Market Tests

Automated tests for the Steam Community Market using Playwright.

## Features

- Automated UI tests using [Playwright](https://playwright.dev/)
- Page Object Model for maintainable code
- Allure reporting integration for rich test reports
- Ready for CI: runs on GitHub Actions on every push and daily at midnight (UTC)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/)

### Installation

```sh
git clone https://github.com/RukshanSnookie/steam-market-tests.git
cd steam-market-tests
npm install
```

### Running Tests

Install Playwright browsers (first time only):

```sh
npx playwright install --with-deps
```

Run all tests:

```sh
npx playwright test
```

### Allure Report

After running tests, generate and open the Allure report:

```sh
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

### Continuous Integration

This project includes a GitHub Actions workflow that will:

- Run tests on every push to the `main` branch
- Run tests automatically every day at 00:00 UTC

See `.github/workflows/ci.yml` for details.

## Project Structure

```
pages/        # Page Object Model files
tests/        # Test scripts
testdata/     # Test data (e.g., URLs)
util/         # Utility scripts
.github/      # GitHub Actions workflows
```

## Best Practices

- Clean, maintainable code
- No redundant or commented-out code
- Steps and page objects follow Playwright and testing best practices

## License

This project is for demonstration and educational purposes.
