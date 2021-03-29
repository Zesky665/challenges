import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import DidomiPage from '../../../support/pages/didomiPage';

const didomiPage=new DidomiPage();

Given('I visit the didomi.io website', () => {
    cy.visit("https://didomi.io/");
});

Then('I see see that a didomi consent notice has pop up', () => {
    // Check if the notice is present
    didomiPage.getConsentNotice()
        .should('be.visible');
});

And('I see that the didomi consent notice has three buttons', () => {
    //Verify the buttons are present
    didomiPage.getButtons()
        .should('have.length',3);
});

Then('I press the Agree and Close button', () => {
    // Set up intercepter for consent POST request
    cy.intercept('POST','https://api.privacy-center.org/v1/events').as('consent');

    //Click on the agree button
    didomiPage.getAgreeButton().click();
    didomiPage.getFinalPopupButton().click();
});

And('I see that the didomi consent notice has closed', () => {
    //Check if popup is still visible
    didomiPage.getConsentNotice()
        .should('not.exist');
});

And('I check that the consent.given POST request is sent', () => {
    //Verify that the POST request was sent with the correct type value
    cy.wait('@consent')
        .its('request.body')
        .should('deep.include', {
          type: 'consent.given'
        })
});

And('I check that the didomi.getUserStatus response is correct', () => {
    //Verify that the consent code is present
    cy.getCookie("euconsent-v2").should("have.property", "value").and("have.length.above", 0);
});


