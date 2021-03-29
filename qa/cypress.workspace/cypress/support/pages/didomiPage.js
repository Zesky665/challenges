class DidomiPage {

    getConsentNotice() {
        return cy.get('#didomi-popup');
    }
    getButtons(){
        return cy.get('#didomi-popup').find('#buttons>button');
    }
    getAgreeButton(){
        return cy.get('#didomi-notice-agree-button');
    }
    getFinalPopupButton(){
        return cy.get('#footerlinkclose-final-popup-agree');
    }
    getRegisterButton() {
        return cy.get('.woocommerce-Button');
    }
}
export default DidomiPage