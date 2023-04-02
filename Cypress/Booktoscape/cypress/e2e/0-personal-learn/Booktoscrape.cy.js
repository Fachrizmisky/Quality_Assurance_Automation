/// <reference types="cypress" />

describe('Booktoscrape', () => {
    
    it('Should check element', () => {
        cy.visit('https://books.toscrape.com/index.html' , {timeout: 50000})
        cy.url().should('include', 'index.html')
       
    });

    it('Should click on travel', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
    });

  
});
