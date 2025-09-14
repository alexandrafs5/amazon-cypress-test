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
        cy.get('.s-main-slot .s-result-item:not([data-component-type="s-ad"])', { timeout: 20000 })
            .first()
            .find('h2 a')
            .first()
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