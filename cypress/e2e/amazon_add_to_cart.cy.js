import AmazonPage from '../support/pageObjects/AmazonPage';

describe('Amazon Add to Cart Test', () => {
  const amazon = new AmazonPage();

  it('adds a product to cart successfully', () => {
    amazon.visit();
    amazon.searchProduct('laptop');
    amazon.selectFirstProduct();
    amazon.addToCart();
    amazon.verifyAdded();
  });
});