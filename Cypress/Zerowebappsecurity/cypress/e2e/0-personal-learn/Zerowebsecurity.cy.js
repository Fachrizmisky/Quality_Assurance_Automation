/// <reference types="cypress" />

describe('Zerowebappsecurity', () => {
  
    before(() => {
        cy.visit('http://zero.webappsecurity.com/login.html' )
    });

    it('Should try to login', () => {
        cy.fixture("user").then(user => {
            const username5 = user.username5
            const password5 = user.password5
            const payee = user.payees
            const account = user.account
            const amount= user.amount
            const date = user.date
            const description = user.description
            cy.login(username5, password5)
            cy.get('a').contains('Pay Bills').click()
            cy.PayBills(payee, account, amount, date, description)

        })
      });

   

   
});