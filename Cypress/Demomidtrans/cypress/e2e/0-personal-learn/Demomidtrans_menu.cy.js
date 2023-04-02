/// <reference types="cypress" /> 

describe('Demo Midtrans', () => {

    it('should try menu', () => {
        cy.visit('https://dashboard.midtrans.com/login',{timeout: 10000})
        cy.url().should('include', 'midtrans.com/login') 
    });

    it('should open wesbite toko online untuk bisnis', () => {
        cy.get('a').contains('Website Toko Online untuk Bisnis, Apa Pentingnya?', {timeout: 10000}).click()
        
    });

    it('should open pengunaan', () => {
        cy.get('#trigger-overlay').click()
        cy.get(':nth-child(1) > .accordion-mobile').click({force:true})
        cy.get('span').contains('Startups & Early Businesses').click({ multiple: true, force: true })
    });
});