describe('Adding items to cart', () => {
    before('setUp', () => {
        cy.login();
        cy.contains('Headphones').click({force : true});
    })
    
    
    it('Adds single item to cart', () => {
        cy.get('.fa-shopping-cart').eq(0).click({force:true});
        cy.contains('You have added HTC Touch HD to your shopping cart!').should('be.visible');
    });

    it('Adds additional item to cart', () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/");
       cy.contains('Screenguards').click({force:true});
       cy.get('.cart-30').click({force:true});
       cy.contains('You have added Canon EOS 5D to your shopping cart!').should('be.visible');
    })
})