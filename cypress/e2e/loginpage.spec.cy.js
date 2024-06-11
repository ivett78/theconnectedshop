describe('Login to The Connected Shop',()=> {
    it('should log in successfully with valid credentials',() => {
        cy.visit('https://theconnectedshop.com/account/login');
        cy.url()
            .should('eq','https://theconnectedshop.com/account/login');
        cy.title()
            .should('include','Account – The Connected Shop');
// enter valid login into email field
        cy.get('input[name="customer[email]"]')
            .type('test@test.com');
// enter valid password
        cy.get('input[name="customer[password]"]')
            .type('123456!');
// click submit
        cy.get('button[type="submit"]')
            .click();

    })
})