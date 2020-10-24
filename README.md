
# Cypress example project
This is an example of cypress project. You can see project's structure and some scenarios here.

# How to run?

 1. Clone the repo
 2. Install required dependencies: `npm install`
 3. Run tests: `npm run tests`

### Execution results
![Execution results](https://github.com/DmytroCh/cypress-example/blob/main/cypress/images/run_results.png)

# Scenarios
Scenarios source code you can find [here](https://github.com/DmytroCh/cypress-example/tree/main/cypress/integration/scenarios).

### Scenario 1
1. Open 10C home page ('https://10clouds.com/')
2. Open Careers tab
3. Validate that there is exactly 1 'QA Automation Engineer' role open

### Scenario 2
1. Open 10C home page('https://10clouds.com/')
2. Open Careers tab
3. Type 'Automation' in Search jobs input
4. Validate that each result contains "Automation" in title
