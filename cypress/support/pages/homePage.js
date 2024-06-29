class HomePage {

  //method Visit(OpenSite)
  visitSite() {
    cy.visit('https://theconnectedshop.com/')
  }

  // method to check Homepage URL
  checkUrlHomepage() {
    cy.url()
        .should('eq', 'https://theconnectedshop.com/');
  }

  // method to check Title
  checkTitleHomePage() {
    cy.title()
        .should('include', 'The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');
  }

  //method to check Logo
  checkLogo() {
    cy.get('.Header__LogoImage--transparent')
        .should('be.visible')
        .and('have.attr', 'alt', 'The Connected Shop Logo White');
  }

  //method to check Search Element icon
/* checkSearchElementIcon() {
    cy.get('[aria-label="Search"]')
        .should('be.visible');
  }*/

  // Method Detect Cookie popup
  checkCookiePopup() {
    cy.get('#shopify-pc__banner')
        .should('be.visible');
  }

  // Method Accept Cookies
  clickAcceptButton() {
    cy.get('#shopify-pc__banner__btn-accept')
        .should('be.visible')
        .click();
  }

  // Method Check Decline Cookies
  clickDeclineButton() {
    cy.get('#shopify-pc__banner__btn-decline')
        .should('be.visible')
        .click();
  }
}
export default HomePage;