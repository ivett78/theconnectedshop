import HomePage from "../support/pages/homePage";
import ViewPort from "./viewPort";
import viewPort from "./viewPort";
describe('Add to Cart check',()=> {
    const viewPort= new ViewPort();
    viewPort.viewports.forEach((viewport) => {
        it(`should display goods when searching for "smart" 
    on ${viewport.width}x${viewport.height} screen`, () => {
            cy.viewport(viewport.width, viewport.height);
            cy.visit('https://theconnectedshop.com/');
            //       click search with entered keyword
            cy.get('#shopify-pc__banner__btn-accept')
                .click();
            cy.get('.NewsletterPopup__Close')
                .click();
            cy.get('.Header__SecondaryNav > .HorizontalList > :nth-child(2) > .Heading')
                .click();
            cy.get('.Search__Input')
                .type('smart');
            cy.get('h2.ProductItem__Title.Heading a')
                .contains('Smart Temperature Monitor')
                .click();
           cy.url()
                .should('include', '/products/smart-temperature-monitor', { timeout: 5000 })
            cy.title()
                .should('include', 'Smart Temperature Monitor Temperature and Humidity Sensor, Mobile App – The Connected Shop');
            cy.get('button[data-action="add-to-cart"]', { timeout: 5000 })
                .should('be.visible')
                .click();
            cy.get('.ProductForm__AddToCart', { timeout: 5000 })
                .should('be.visible');
            cy.get('.CartItem__Title > a')
                .contains('Smart Temperature Monitor');
// checking item in the cart
            cy.get(':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Title > a')
                .contains('Smart Temperature Monitor');
            cy.get('.CartItem__Variant', { timeout: 5000 })
                .should('contain', 'White');
 //               .should('have.attr', 'href')

        })
    })
})
