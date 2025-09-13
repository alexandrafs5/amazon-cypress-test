class AmazonPage {
    visit() {
        cy.visit('/');
    }

    searchProduct(productName) {
        cy.get('#twotabsearchtextbox', { timeout: 10000 })
            .should('be.visible')
            .type(`${productName}{enter}`);
    }

    selectFirstProduct() {
        cy.get('.s-main-slot .s-result-item', { timeout: 20000 })
            .should('be.visible')
            .then(($items) => {
                const validItems = $items.filter((index, el) => el.querySelector('h2 a'));
                if (validItems.length > 0) {
                    cy.wrap(validItems[0]).find('h2 a').first().click();
                } else {
                    throw new Error('No product found with h2 a');
                }
            });
    }

    addToCart() {
        cy.get('#add-to-cart-button', { timeout: 10000 })
            .should('be.visible')
            .click();
    }

    verifyAdded() {
        cy.get('#huc-v2-order-row-confirm-text', { timeout: 10000 })
            .should('contain.text', 'added to Cart');
    }
}

export default AmazonPage;