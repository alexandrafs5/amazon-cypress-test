class AmazonPage {
    visit() {
        cy.visit('/');
    }

    searchProduct(productName) {
        cy.get('#twotabsearchtextbox', { timeout: 10000 })
            .type(`${productName}{enter}`);
    }

    selectFirstProduct() {
        cy.get('.s-main-slot .s-result-item', { timeout: 10000 })
            .first()
            .find('h2 a')
            .first()
            .click();
    }

    addToCart() {
        cy.get('[id^="add-to-cart"]', { timeout: 10000 })
            .should('be.visible')
            .click();
    }

    verifyAdded() {
        cy.get('h1, #huc-v2-order-row-confirm-text', { timeout: 10000 })
            .should('contain.text', 'added to Cart');
    }
}

export default AmazonPage;