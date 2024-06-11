describe('Open The Connected Shop', () => {
    it('should load the home page successfully', () => {
// I check that we open exactly home page
        cy.visit('https://theconnectedshop.com/');
// check URL
        cy.url()
            .should('eq','https://theconnectedshop.com/');
// title check
        cy.title()
            .should('include','The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');
// logo check
        cy.get('.Header__LogoImage--transparent')
            .should('be.visible')
            .and('have.attr','alt','The Connected Shop Logo White')
// sidebar menu button check
        cy.get(':nth-child(1) > .Header__Icon')
            .should('be.visible');
// search element icon check
        cy.get('[aria-label="Search"]')
            .should('be.visible');
// button product form check
        cy.get('.Header__Wrapper > :nth-child(3) > [aria-expanded="false"]')
            .should('be.visible');



        cy.get('body')
            .should('be.visible');
    })
})