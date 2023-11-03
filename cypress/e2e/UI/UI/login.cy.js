import { invalidUser1, validUser, invalidUser2} from '../../../fixtures/Test Data/UI/loginUsers'

describe('Login Collection', () => {
    it('Verifies successful login with valid email', () => {

        cy.login();

        cy.url().should('include', 'route=account/account');
        //cy.url().should('contain', 'route=account/account');
        cy.contains('My account');
    });

    it('Invalid login email - example 1', () => {

        cy.login(invalidUser1.email, invalidUser1.password);
        cy.url().should('include', 'route=account/login');
        cy.get('#account-login > .alert').should(
            'contain',
            'Warning: No match for E-Mail Address and/or Password.'
        );
    });

    it('Invalid login email - example 2', () => {

        cy.login(invalidUser2.email, invalidUser2.password);
        cy.url().should('include', 'route=account/login');
        cy.get('#account-login > .alert').should(
            'contain',
            'Warning: No match for E-Mail Address and/or Password.'
        );
    });
});