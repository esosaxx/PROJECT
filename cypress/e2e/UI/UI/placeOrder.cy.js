import { afterEach } from "mocha";

describe('Placing Orders', () => {

before('Set Up', () => {
    cy.login();
});

//afterEach('Reset', () => {
    //cy.visit(URL);
//});

it('Verifies successful checkout with valid details in mandatory fields', () => {
    cy.contains('Headphones').click({force:true});
    cy.get('.fa-shopping-cart').eq(0).click({force:true});
    cy.get('.btn-block').eq(1).click({force:true});

    cy.url().should('contain', '/checkout' );

    cy.get('#input-payment-firstname').type('esosa');
    cy.get('#input-payment-lastname').type('oghagbon');
    cy.get('#input-payment-address-1').type('26 Hawthorne Road');
    cy.get('#input-payment-city').type('London');
    cy.get('#input-payment-postcode').type('BR1 4JW');
    cy.get('.custom-control-input').click();
    cy.get('.custom-checkbox').eq(4).click();

cy.contains('Total').should('be.visible');
cy.contains('Product Name').should('be.visible');
cy.contains('Quantity').should('be.visible');
// assertions
// 1. correct total price of products should be visible
//2. correct billing address and shipping addreess should be visible
//3. correct product details should be visible
cy.get('#button-confirm').click()
cy.url().should('contain', 'oute=checkout/success');
cy.contains('Your order has been placed!').should('be.visible');

cy.contains('Home').click()
cy.contains('Order History').should('be.visible');
cy.contains('esosa oghagbon').should('be.visible');
})

it('Verifies unsuccessful checkout with no details entered', () => {
    cy.contains('Headphones').click({force:true});
    cy.get('.fa-shopping-cart').eq(0).click({force:true});
    cy.get('.btn-block').eq(1).click({force:true});
})
})
