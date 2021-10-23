import NavigationBar from "./NavigationBar";

class CareersPage {
    constructor(){
        this.navigationBar = new NavigationBar();
    }

    visitPage() {
        this.navigationBar.getCareers().click();
        cy.location('pathname', {timeout: 10000}).should('include', '/careers/');
    }

    getOffers() {
        return cy.get('.job-offers__wrapper').find('.job-offer__title');
    }

    getSpecifficOffers(title) {
        return this.getOffers().filter(`:contains(${title})`);
    }

    getSearch() {
        return cy.get('#job-offers-section input[type=text]');
    }
}

export default CareersPage