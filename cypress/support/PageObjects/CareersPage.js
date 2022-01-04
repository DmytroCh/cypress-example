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

    selectDepartmentOption(option) {
        cy.get('.select--desktop').find(`:contains(${this.getDepartments().all})`).click();
        cy.get(".job-offers__search-row").find(`li:contains(${option})`).click();
    }

    getDepartments() {
        /**
         * All options available in departments dropbox
         */
        return {
            all: "All departments",
            web: "Web",
            design: "Design",
            devops: "DevOps",
            sales: "Sales",
            hr: "HR",
            marketing: "Marketing",
            productDeliveryManagment: "Product Delivery Management",
            qa: "QA",
            resourcing: "Resourcing"
        }
    }
}

export default CareersPage