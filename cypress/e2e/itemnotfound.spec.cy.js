describe('Search for products for The Connected Shop',()=> {
    const viewports = [
        {width: 1280, height: 720},  // Desktop
        // {width: 768, height: 1024},  // Tablet
        //  {width: 375, height: 667}    // Mobile
    ];
    viewports.forEach((viewport) => {
        it(`should display a message when searching for "brick"
    on ${viewport.width}x${viewport.height} screen`, () => {
            cy.viewport(viewport.width, viewport.height);
            cy.visit('https://theconnectedshop.com/');
// click search with entered keyword
            cy.get('#shopify-pc__banner__btn-accept')
                .click();
            cy.get('.NewsletterPopup__Close')
                .click();
            cy.get('.Header__SecondaryNav > .HorizontalList > :nth-child(2) > .Heading')
                .click();
            cy.get('.Search__Input')
                .type('brick');
     //       cy.get(':nth-child(1) > .Segment > .Segment__Title > .Heading')
               cy.contains('No results could be found')
               .should ('be.visible');

        })
    })
})


