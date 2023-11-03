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
    cy.visit('https://ecommerce-playground.lambdatest.io/')
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
  });

  it('Verify unsuccessful registration with no fields inputed', () => {
    cy.contains('Continue').click();
  })
})