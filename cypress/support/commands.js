// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import { uiPassword } from "./UI testing/helper";
import { loginSelectors } from "../fixtures/Selectors/loginPage";
import { registrationSelectors } from "../fixtures/Selectors/registrationPage";
import { randomString } from "./UI testing/helper";

// -- This is a parent command --
Cypress.Commands.add('login', (email = 'esosa6@gmail.com', password = uiPassword) => {
    cy.visit(Cypress.env('url'));
    cy.contains('Login').click({ force: true });
    //cy.get(Selectors.loginButton).click();
    cy.get(loginSelectors.emailField).type(email);
    cy.get(loginSelectors.passwordField).type('password1', { force: true });

    cy.get(loginSelectors.loginButton).click();
});

Cypress.Commands.add('register', (email = `esosa${randomString}@gmail.co.uk`, password = `password${randomString}`) => {
    cy.visit(Cypress.env('url'));
    cy.contains('Register').click({force:true});
    cy.get(registrationSelectors.firstNameField).type('esosa');
    cy.get(registrationSelectors.lastNameField).type('oghagbon');
    cy.get(registrationSelectors.emailField).type(email);
    cy.get(registrationSelectors.telephoneField).type('07379032721');
    cy.get(registrationSelectors.passwordField).type(password);
    cy.get(registrationSelectors.confirmPasswordField).type(password);
    cy.get('.custom-checkbox').click();
    cy.contains('Continue').click();
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })