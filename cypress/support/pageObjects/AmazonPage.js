class AmazonPage {
    visit() {
        cy.visit('/');
    }

    searchProduct(productName) {
        cy.get('#twotabsearchtextbox').type(`${productName}{enter}`);
    }

    selectFirstProduct() {
        cy.get('.s-main-slot .s-result-item').first().click();
    }

    addToCart() {
        cy.get('#add-to-cart-button').click();
    }

    verifyAdded() {
        cy.get('#huc-v2-order-row-confirm-text').should('contain.text', 'added to Cart');
    }
}

export default AmazonPage;