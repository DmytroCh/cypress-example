/// <reference types="cypress" />

const baseUrl = 'https://10clouds.com'

context('Scenarios', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
        cy.get('.nav-link-container').contains('Careers').click()
    })

    it('Scenario 1', () => {
        cy.location('pathname', {timeout: 10000}).should('include', '/careers/')
        cy.get('.job-offers__wrapper').within(() => {
            cy.get('.job-offer__title:contains(QA Automation Engineer)').should('have.length', 1)
        })
    })

    it('Scenario 2', () => {
        cy.location('pathname', {timeout: 10000}).should('include', '/careers/')
        cy.get('#job-offers-section input[type=text]')
            .type('Automation')
        cy.get('.job-offers__wrapper').find('.job-offer__title').each((item) => {
            cy.wrap(item).should('contain.text', 'Automation')
        })
    })
})

