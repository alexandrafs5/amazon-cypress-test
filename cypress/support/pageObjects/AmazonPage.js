class AmazonPage {
    visit() {
        cy.visit('/');
    }

    searchProduct(productName) {
        cy.get('#twotabsearchtextbox').type(`${productName}{enter}`);
    }

    selectFirstProduct() {
        cy.get('.s-main-slot .s-result-item', { timeout: 15000 })
            .filter(':has(h2 a)')
            .first()
            .find('h2 a')
            .first()
            .click();
    }

    addToCart() {
        cy.get('#add-to-cart-button', { timeout: 10000 }).click();
    }

    verifyAdded() {
        cy.get('#huc-v2-order-row-confirm-text', { timeout: 10000 })
            .should('contain.text', 'added to Cart');
    }
}

export default AmazonPage;