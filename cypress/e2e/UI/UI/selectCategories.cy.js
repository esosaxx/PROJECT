describe('Verifies selected category page is displayed correctly', () => {
    before(() => {
    
        cy.login();
         })
it('Verifies Components page is displayed corrrectly', () => {
    cy.get('.svg-icon').eq(0).click({force : true});
    cy.get('.product-layout').should('have.length.gt', 0);
    cy.get('.active').should('contain','Components');
});
it('Verifies Cameras page is displayed corrrectly', () => {
    cy.visit(Cypress.env('url'));
    cy.get('.svg-icon').eq(1).click({force : true});
    cy.get('.product-layout').should('have.length.gt', 0);
    cy.get('.active').should('contain','Cameras');
})
it('Verifies Software page is displayed corrrectly', () => {
    cy.visit(Cypress.env('url'));
    cy.get('.svg-icon').eq(3).click({force : true});
    cy.get('.product-layout').should('have.length.gt', 0);
    cy.get('.active').should('contain','Software');
})
it('Verifies MP3 Players page is displayed corrrectly', () => {
    cy.visit(Cypress.env('url'));
    cy.get('.svg-icon').eq(4).click({force : true});
    cy.get('.product-layout').should('have.length.gt', 0);
    cy.get('.active').should('contain','MP3 Players');
})
})