class NavigationBar {
    getNavigationBar() {
        return cy.get('.nav-link-container');
    }

    getServices() {
        return this.getNavigationBar().contains('Services');
    }

    getHowWeWork() {
        return this.getNavigationBar().contains('How we work');
    }

    getCaseStudies() {
        return this.getNavigationBar().contains('Case studies');
    }

    getCareers() {
        return this.getNavigationBar().contains('Careers');
    }

    getBlog() {
        return this.getNavigationBar().contains('Blog');
    }

    getContactUs() {
        return this.getNavigationBar().contains('Contact us');
    }    
}

export default NavigationBar