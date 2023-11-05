describe('Verifies selected category page is displayed correctly', () => {
    before(() => {
    
        cy.login();
         })
it('Verifies Components page is displayed corrrectly', () => {
    cy.get('.svg-icon').eq(0).click({force : true});
    cy.contains('Components').should('be.visible');
});
it('Verifies Cameras page is displayed corrrectly', () => {
    cy.visit(Cypress.env('url'));
    cy.get('.svg-icon').eq(1).click({force : true});
    cy.contains('Cameras').should('be.visible');
})
it('Verifies Software page is displayed corrrectly', () => {
    cy.visit(Cypress.env('url'));
    cy.get('.svg-icon').eq(3).click({force : true});
    cy.contains('Software').should('be.visible');
})
it('Verifies MP3 Players page is displayed corrrectly', () => {
    cy.visit(Cypress.env('url'));
    cy.get('.svg-icon').eq(4).click({force : true});
    cy.contains('MP3 Players').should('be.visible');
})
})