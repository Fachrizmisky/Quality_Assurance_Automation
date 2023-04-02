/// <reference types="cypress" />

describe('Demo Midtrans', () => {

    it('open web site and sign up', () => {
        cy.visit('https://demo.midtrans.com/', {timeout: 100000})
        cy.get('.midtrans-signup > .btn').invoke("removeAttr", "target").click({force: true})
        cy.get('h1').should('be.visible')
    });
 
    it('Fill Up Sign Up Form', () => {
        cy.get('#user_merchant_name').type('zayn')
        cy.get('#user_full_name').type('zayn malik')
        cy.get('#user_email').type('zaynmalwik@gmail.com')
        cy.get('#user_phone').type('81234947850')
        cy.get('#user_password').type('Zaynmalik39')
        cy.get('#user_password_confirmation').type('Zaynmalik39')
        cy.get('#signup_btn').click()
    });
});