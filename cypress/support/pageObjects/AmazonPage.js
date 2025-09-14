class AmazonPage {
    visit() {
        cy.visit('/');
    }

    searchProduct(productName) {
        cy.get('#twotabsearchtextbox', { timeout: 20000 })
            .should('be.visible')
            .type(`${productName}{enter}`);
    }

    selectFirstProduct() {
        cy.get('[data-component-type="s-search-result"] h3 a, .s-result-item h3 a, .s-result-item h2 a', { timeout: 20000 })
            .first()
            .should('be.visible')
            .click();
    }

    addToCart() {
        cy.contains('Add to Cart', { timeout: 15000 })
            .should('be.visible')
            .click();
    }

    verifyAdded() {
        cy.get('h1, span, div', { timeout: 15000 })
            .contains(/added to Cart|Added to Cart/i)
            .should('exist');
    }
}

export default AmazonPage;