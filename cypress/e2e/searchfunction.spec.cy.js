describe('Search for products for The Connected Shop',()=> {
    const viewports = [
        {width: 1280, height: 720},  // Desktop
       // {width: 768, height: 1024},  // Tablet
      //  {width: 375, height: 667}    // Mobile
    ];
    viewports.forEach((viewport) => {
        it(`should display goods when searching for "smart" 
    on ${viewport.width}x${viewport.height} screen`, () => {
            cy.viewport(viewport.width, viewport.height);
            cy.visit('https://theconnectedshop.com/');
            //click search with entered keyword
         cy.get('#shopify-pc__banner__btn-accept')
             .click();
         cy.get('.NewsletterPopup__Close')
             .click();
            cy.get('.Header__SecondaryNav > .HorizontalList > :nth-child(2) > .Heading')
                .click();
            cy.get('.Search__Input')
                .type('smart');
   /*         cy.contains('113 results')
                .should('be.visible');*/
            cy.get('span.Heading.Text--subdued.u-h7')
                .should('contain', 'results');
            cy.get('h2.ProductItem__Title.Heading a')
                .contains('Smart Temperature Monitor')
                .should('have.attr', 'href')
                .and('include', '/products/smart-temperature-monitor');
            /*    cy.get(':nth-child(1) > .Header__Icon')
             .click();
         cy.get('#sidebar-menu > .Drawer__Header > .Drawer__Close')
             .click();*/
        })
    })

})