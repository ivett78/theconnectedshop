describe('Open Google Nederland location page', () => {
    it('should load the google maps page successfully', () => {

        cy.visit('https://www.google.nl/maps/@51.9264172,4.4655415,14z?entry=ttu')


        cy.get('body').should('be.visible')
    })
})