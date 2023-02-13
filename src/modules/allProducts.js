const Homepage = async (i, electricItems) => {
  if (electricItems) {
    const allProducts = document.querySelector('.all-products-wrapper');
    allProducts.innerHTML += `
      <div class="row row-10">
        <div class="col-6">
          <div class="grid-product space-mb--20">
            <div class="grid-product__image">
              <a href="shop-product.html">
                <img src="src/assets/img/products/product1.png" class="img-fluid" alt="product1" />
              </a>
              <button class="icon">
                <img src="src/assets/img/icons/heart-dark.svg" class="injectable" alt="heart-dark" />
              </button>
            </div>
            <div class="grid-product__content">
              <h3 class="title">
                <a href="shop-product.html">Leather Bag</a>
              </h3>
              <span class="category">Bag</span>
              <div class="price">
                <span class="main-price">$460</span>
                <span class="discounted-price">$320</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default Homepage;