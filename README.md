# QA_Task_2

# Overview
Repository of Task_2 (Api Automation of https://reqres.in/ using Cypress)

## Requirement to run the automation
- node.js (version 12 to 14)
- Cypress
- Note: Latest version of cypress is not working with node latest version thatswhy we are using version between 12 to 14)


## How to Run the code
- Install node.js from https://nodejs.org/download/release/v12.11.1/
- Clone the repository
- In root folder run **npm init**
- In root folder run **npm install cypress --save-dev** to install cypress
- After successful installation of cypress run **node_modules\\.bin\cypress open** to open cypress
- Select e2e in cypress window.

## Running Test in command-line
node_modules/.bin/cypress run --spec "cypress/e2e/Api_Automation.cy.js"
