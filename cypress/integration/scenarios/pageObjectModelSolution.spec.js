import CareersPage from "../../support/PageObjects/CareersPage"

const baseUrl = 'https://10clouds.com' // move to .json

describe('Scenarios', () => {
    const careersPage = new CareersPage()
    beforeEach(() => {
        cy.visit(baseUrl)
        careersPage.visitPage()
    })
    
    it('Scenario 1', () => {
        careersPage.getSpecifficOffers('QA Automation Engineer').should('have.length', 1)
    })
    
    it('Scenario 2', () => {
        careersPage.getSearch().type('Automation')
        careersPage.getOffers().each((item) => {
            cy.wrap(item).should('contain.text', 'Automation')
        })
    })

})

