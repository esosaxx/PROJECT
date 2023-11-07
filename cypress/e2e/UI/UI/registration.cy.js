/// <reference types="cypress" />
import {randomString} from '../../../support/UI testing/helper';

describe('Registration Collection', () => {

  afterEach('setUp', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/');
  })

  it('Verify successful registration with valid user details', () => {
    cy.register();

    //Assertions
    cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
  });

  it('Verify unsuccessful registration with previously used email', () => {
    cy.visit(Cypress.env('url'));
    cy.contains('Register').click({force:true});
    cy.get('#input-firstname').type('esosa');
    cy.get('#input-lastname').type('oghagbon');
    cy.get('#input-email').type('esosa6@gmail.com');
    cy.get('#input-telephone').type('07379032721');
    cy.get('#input-password').type('password1');
    cy.get('#input-confirm').type('password1');
    cy.get('.custom-checkbox').click();
    cy.contains('Continue').click();

    //Assertions
    cy.contains('Warning: E-Mail Address is already registered!').should('be.visible');
    cy.url().should('include', 'register')
  });

  it('Verify unsuccessful registration with no fields inputed', () => {
    cy.visit(Cypress.env('url'));
    cy.contains('Register').click({force:true});
    cy.contains('Continue').click();

    cy.url().should('include', 'register')
    cy.contains('First Name must be between 1 and 32 characters!').should('be.visible');
    cy.contains('Last Name must be between 1 and 32 characters!').should('be.visible');
    cy.contains('E-Mail Address does not appear to be valid!').should('be.visible');
    cy.contains('Telephone must be between 3 and 32 characters!').should('be.visible');
    cy.contains('Password must be between 4 and 20 characters!').should('be.visible');
  });

  it('Verifies unsuccessful regsitration with empty first name field', () => {
    cy.visit(Cypress.env('url'));
    cy.contains('Register').click({force:true});
    cy.get('#input-lastname').type('oghagbon');
    cy.get('#input-email').type(`esosa${randomString}@gmail.com`);
    cy.get('#input-telephone').type('07379032721');
    cy.get('#input-password').type('password1');
    cy.get('#input-confirm').type('password1');
    cy.get('.custom-checkbox').click();
    cy.contains('Continue').click();

    cy.contains('First Name must be between 1 and 32 characters!').should('be.visible');
    cy.url().should('include', 'register');
  });

  it('Verifies unsuccessful regsitration with first name above 32 characters', () => {
    cy.visit(Cypress.env('url'));
    cy.contains('Register').click({force:true});
    cy.get('#input-firstname').type('esosaoghagbonusethisastestdataasexample');
    cy.get('#input-lastname').type('oghagbon');
    cy.get('#input-email').type(`esosa${randomString}@gmail.com`);
    cy.get('#input-telephone').type('07379032721');
    cy.get('#input-password').type('password1');
    cy.get('#input-confirm').type('password1');
    cy.get('.custom-checkbox').click();
    cy.contains('Continue').click();

    cy.contains('First Name must be between 1 and 32 characters!').should('be.visible');
    cy.url().should('include', 'register');
  })

  it('Verify unsuccessful registration with empty last name field', () => {
    cy.visit(Cypress.env('url'));
    cy.contains('Register').click({force:true});
    cy.get('#input-firstname').type('esosa');
    cy.get('#input-email').type(`esosa${randomString}@gmail.com`);
    cy.get('#input-telephone').type('07379032721');
    cy.get('#input-password').type('password1');
    cy.get('#input-confirm').type('password1');
    cy.get('.custom-checkbox').click();
    cy.contains('Continue').click();

    cy.contains('Last Name must be between 1 and 32 characters!').should('be.visible');
    cy.url().should('include', 'register');
  })

  it('Verifies unsuccessful regsitration with last name above 32 characters', () => {
    cy.visit(Cypress.env('url'));
    cy.contains('Register').click({force:true});
    cy.get('#input-firstname').type('esosa');
    cy.get('#input-lastname').type('esosaoghagbonusethisastestdataasexample');
    cy.get('#input-email').type(`esosa${randomString}@gmail.com`);
    cy.get('#input-telephone').type('07379032721');
    cy.get('#input-password').type('password1');
    cy.get('#input-confirm').type('password1');
    cy.get('.custom-checkbox').click();
    cy.contains('Continue').click();

    cy.contains('Last Name must be between 1 and 32 characters!').should('be.visible');
    cy.url().should('include', 'register');
})

it('Verifies unsuccessful regsitration with empty email field', () => {
  cy.visit(Cypress.env('url'));
  cy.contains('Register').click({force:true});
  cy.get('#input-firstname').type('esosa');
  cy.get('#input-lastname').type('oghagbon');
  cy.get('#input-telephone').type('07379032721');
  cy.get('#input-password').type('password1');
  cy.get('#input-confirm').type('password1');
  cy.get('.custom-checkbox').click();
  cy.contains('Continue').click();

  cy.contains('E-Mail Address does not appear to be valid!').should('be.visible');
  cy.url().should('include', 'register');
});

  it('Verifies unsuccessful regsitration with invalid email - no @ symbol', () => {
    cy.visit(Cypress.env('url'));
    cy.contains('Register').click({force:true});
    cy.get('#input-firstname').type('esosa');
    cy.get('#input-lastname').type('oghagbon');
    cy.get('#input-email').type(`esosa${randomString}gmail.com`);
    cy.get('#input-telephone').type('07379032721');
    cy.get('#input-password').type('password1');
    cy.get('#input-confirm').type('password1');
    cy.get('.custom-checkbox').click();
    cy.contains('Continue').click();

    cy.contains('Please include an "@" in the email address').should('be.visible');
    cy.url().should('include', 'register');
})

it('Verifies unsuccessful regsitration with empty password fields', () => {
  cy.visit(Cypress.env('url'));
  cy.contains('Register').click({force:true});
  cy.get('#input-firstname').type('esosa');
  cy.get('#input-lastname').type('oghagbon');
  cy.get('#input-email').type(`esosa${randomString}@gmail.com`);
  cy.get('#input-telephone').type('07379032721');
  cy.get('.custom-checkbox').click();
  cy.contains('Continue').click();

  cy.contains('Password must be between 4 and 20 characters!').should('be.visible');
  cy.url().should('include', 'register');
})

it('Verifies unsuccessful regsitration with empty confirm password field', () => {
  cy.visit(Cypress.env('url'));
  cy.contains('Register').click({force:true});
  cy.get('#input-firstname').type('esosa');
  cy.get('#input-lastname').type('oghagbon');
  cy.get('#input-email').type(`esosa${randomString}@gmail.com`);
  cy.get('#input-telephone').type('07379032721');
  cy.get('#input-password').type('password1');
  cy.get('.custom-checkbox').click();
  cy.contains('Continue').click();

  cy.contains('Password confirmation does not match password!').should('be.visible');
  cy.url().should('include', 'register');
})

it('Verifies unsuccessful regsitration with password fields not being identical', () => {
  cy.visit(Cypress.env('url'));
  cy.contains('Register').click({force:true});
  cy.get('#input-firstname').type('esosa');
  cy.get('#input-lastname').type('oghagbon');
  cy.get('#input-email').type(`esosa${randomString}@gmail.com`);
  cy.get('#input-telephone').type('07379032721');
  cy.get('#input-password').type('password');
  cy.get('#input-confirm').type(`password${randomString}`);
  cy.get('.custom-checkbox').click();
  cy.contains('Continue').click();

  cy.contains('Password confirmation does not match password!').should('be.visible');
  cy.url().should('include', 'register');
})

it('Verifies unsuccessful regsitration with empty telephone field', () => {
  cy.visit(Cypress.env('url'));
  cy.contains('Register').click({force:true});
  cy.get('#input-firstname').type('esosa');
  cy.get('#input-lastname').type('oghagbon');
  cy.get('#input-email').type(`esosa${randomString}@gmail.com`);
  cy.get('#input-password').type('password1');
  cy.get('#input-confirm').type('password1');
  cy.get('.custom-checkbox').click();
  cy.contains('Continue').click();

  cy.contains('Telephone must be between 3 and 32 characters!').should('be.visible');
  cy.url().should('include', 'register');
})

it('Verifies unsuccessful regsitration with phone number including letters', () => {
  cy.visit(Cypress.env('url'));
  cy.contains('Register').click({force:true});
  cy.get('#input-firstname').type('esosa');
  cy.get('#input-lastname').type('oghagbon');
  cy.get('#input-email').type(`esosa${randomString}@gmail.com`);
  cy.get('#input-telephone').type('0737903272a');
  cy.get('#input-password').type('password1');
  cy.get('#input-confirm').type('password1');
  cy.get('.custom-checkbox').click();
  cy.contains('Continue').click();

  cy.contains('Telephone must be between 3 and 32 characters!').should('be.visible');
  cy.url().should('include', 'register');
})
});