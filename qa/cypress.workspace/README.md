# Set UP

## Installing Cypress

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)

Install Cypress for Mac, Linux, or Windows, then [get started](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

```bash
npm install -g cypress
```
or
```bash
yarn add -g cypress
```

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

Then install the rest with:
```bash
npm install
```

## Running Test with UI
Run the cypress window with the following command form the root of the cypress project

```bash
npx cypress open
```
or
```bash
 ./node_modules/.bin/cypress open
```

## Running the Tests with the CLI
To run the tests with the CLI, the cypress window is not needed. 
From the root of the cypress project run the following command.

```bash
npx cypress run --spec "cypress/integration/features/didomi.feature"
```
or

```bash
cypress run --spec "cypress/integration/features/didomi.feature"
```

