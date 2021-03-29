  // type definitions for Cypress object "cy"
  /// <reference types="cypress" />
 
describe('Didomi Consent Notice Test', function() {
    it('Visits the Didomi website and checks if the consent notice is present', function() {
    
    //Visit the Didomi Website
    cy.visit("https://didomi.io/");

    // Check if the notice is present
    cy.get('#didomi-popup')
        .find('.didomi-popup-view')
        .should('be.visible');

    //Verify the buttons are present
    cy.get('#didomi-popup')
        .find('#buttons>button')
        .should('have.length',3);

    cy.intercept('POST','https://api.privacy-center.org/v1/events').as('consent');

    //Click on the agree button
    cy.get('#didomi-notice-agree-button').click();
    cy.get('#footerlinkclose-final-popup-agree').click();

    cy.wait('@consent')
        .its('request.body')
        .should('deep.include', {
          type: 'consent.given'
        })

    //Check if popup is still visible
    cy.get('#didomi-popup')
        .should('not.exist');

    cy.getCookie("euconsent-v2").should("have.property", "value").and("have.length.above", 0);
})
})