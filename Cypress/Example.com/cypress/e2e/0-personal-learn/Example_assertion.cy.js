/// <reference types="cypress" />


describe('example dot com', () => {
   
    it('Should load correct url', () => {
        cy.visit('https://example.com/' )
        cy.url().should('include', 'example.com') 
        cy.get('h1').should('be.visible')
       
    });

    it('Should check correct url', () => {            
        cy.url().should('include', 'example.com')
    });

    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')
    });
});