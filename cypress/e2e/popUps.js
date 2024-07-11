class PopUps {
    static SELECTORS={
        acceptCookieButton:'#shopify-pc__banner__btn-accept',
        declineCookieButton:'#shopify-pc__banner__btn-decline',
        clickClosePopup:'.NewsletterPopup__Close'
    };
    // Privacy Cookie check that accept button is visible
    cookieAcceptButton() {
        cy.get(PopUps.SELECTORS.acceptCookieButton)
            .should('be.visible')
    };
cookieAcceptButtonClick (){
 cy.get(PopUps.SELECTORS.acceptCookieButton)
     .click();
};
//Close Newsletter Popup
    closeNewsletterPopup(){
        cy.get('.NewsletterPopup__Close')
            .click();
    };

 // Privacy Cookie banner check
//    cy.get('#shopify-pc__banner')
//    .contains ('')
}

export default PopUps