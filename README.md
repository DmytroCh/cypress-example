
# Cypress example project
This is an example of cypress project. You can see project's structure and some scenarios here.

# How to run?

 1. Clone the repo
 2. Install required dependencies: `npm install`
 3. Run tests: `npm run tests`

# Scenarios
Scenarios source code you can find [here](https://github.com/DmytroCh/cypress-example/tree/main/cypress/integration/scenarios).

### Scenario 1
1. Open 10C home page ('https://10clouds.com/')
2. Open Careers tab
3. Validate that there is exactly 1 'QA Automation Engineer' role open

### Scenario 2
1. Open 10C home page('https://10clouds.com/')
2. Open Careers tab
3. Select 'QA' department in dropbox
4. Validate that each result contains "QA" in title

### Execution results
![Execution results](https://github.com/DmytroCh/cypress-example/blob/main/cypress/images/run_result.png)

### Bug description
[Careers page](https://10clouds.com/careers/) contains more than one 'QA Automation Engineer' position.

![Issue](https://github.com/DmytroCh/cypress-example/blob/main/cypress/images/bug.png)
