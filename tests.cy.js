/// <reference types="cypress" />

describe('Sign In page', () => {
    const { faker } = require('@faker-js/faker');
    const username = faker.internet.userName();
    const password = 'SuperSecretPassword!';
  
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/');
    });
  
    it('should register with fakered credentials', () => {
      cy.get('a[id="signin2"]').contains('Sign up').click();

      cy.wait(3000)

      cy.get('input[id="sign-username"]').type(username);
  
      cy.get('input[id="sign-password"]').type(password);

      cy.wait(3000)
  
      cy.get('button[class="btn btn-primary"]').contains('Sign up').click();

      cy.wait(3000)

    });
  
    it('should log in with faked credentials', () => {
      cy.get('a[id="login2"]').contains('Log in').click();

      cy.wait(3000)

      cy.get('input[id="loginusername"]').type(username);
  
      cy.get('input[id="loginpassword"]').type(password);
  
      cy.get('button[class="btn btn-primary"]').contains('Log in').click();

      cy.wait(3000)

      cy.visit('https://www.demoblaze.com/');

      cy.get('a[id="nameofuser"]').contains(username);
    });
  
    it('should add samsung galaxy s6 to cart', () => {
      cy.get('a').contains('Samsung galaxy s6').click();

      cy.wait(2000)
    
      cy.get('a[class="btn btn-success btn-lg"]').click();

      cy.get('a[id="cartur"]').contains('Cart').click();

      cy.wait(2000)

      cy.get('tbody[id="tbodyid"]').should('exist');

    });
  });