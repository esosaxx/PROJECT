describe('Verifies search results are displayed correctly', () => {
    before(() => {
    
        cy.login();
         })

    it('Searches for the text "Apple" and displays results', () => {
        cy.get('[name="search"]').eq(0).type('Apple')
        cy.get('.type-text').click()
           // Verify search results
        cy.url().should('include', 'search=Apple')
        cy.contains('Search - Apple').should('be.visible')
        cy.get('.product-layout').should('have.length.gt', 0)
         });
    it('Searches for the text "Nokia" and displays results', () => {
        cy.visit(Cypress.env('url'));
            cy.get('[name="search"]').eq(0).type('Nokia')
            cy.get('.type-text').click()
               // Verify search results
            cy.url().should('include', 'search=Nokia')
            cy.contains('Search - Nokia').should('be.visible')
            cy.get('.product-layout').should('have.length.gt', 0)
    });
    it('Searches for the text "Samsung" and displays results', () => {
        cy.visit(Cypress.env('url'));
        cy.get('[name="search"]').eq(0).type('Samsung')
        cy.get('.type-text').click()
           // Verify search results
        cy.url().should('include', 'search=Samsung')
        cy.contains('Search - Samsung').should('be.visible')
        cy.get('.product-layout').should('have.length.gt', 0)
    });
    it('Displays message with no search results for invalid search term', () => {
           // Enter search term that returns no results and submit 
        cy.visit(Cypress.env('url'));
        cy.get('[name="search"]').eq(0).type('dgh')
        cy.get('.type-text').click()
           // Verify message for no search results
        cy.contains('There is no product that matches the search criteria.').should('be.visible');
    })
    it('Displays message with no search results for invalid search term', () => {
            // Enter search term that returns no results and submit 
        cy.visit(Cypress.env('url'));
        cy.get('[name="search"]').eq(0).type('banana')
        cy.get('.type-text').click()
            // Verify message for no search results
        cy.contains('There is no product that matches the search criteria.').should('be.visible');
    })
})
