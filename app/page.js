import Image from 'next/image'
import product from '../assets/img/Product.png'
import featuredProduct from '../assets/img/featuredProduct.png'

export default function Home() {
  return (
    <div>
      <div className="featured-products">
        <Image className="featured-product-image" src={featuredProduct} alt="" />
      </div>
      <div>
        <h3 style={{ paddingLeft: '20px' }}>Categories</h3>
      </div>
      <div id="filter-slider">
        <button style={{ background: 'black' }} className="category">All</button>
        <button className="category">Scissors</button>
        <button className="category">Pearls</button>
        <button className="category">Frill</button>
      </div>
      <main id="main">
        <div id="products-grid">
          <div className="product">
            <Image className="product-image" src={product} alt='product-image' />
            <div className="product-info">
              <p className="product-name">Leather Shoes</p>
              <p className="product-tag">Shoe</p>
              <p className="product-price"><span className="price">$199</span><span className="discounted-price">&nbsp;$150</span></p>
            </div>
          </div>
          <div className="product">
            <Image className="product-image" src={product} alt='product-image' />
            <div className="product-info">
              <p className="product-name">Leather Shoes</p>
              <p className="product-tag">Shoe</p>
              <p className="product-price"><span className="price">$199</span><span className="discounted-price">&nbsp;$150</span></p>
            </div>
          </div>
          <div className="product">
            <Image className="product-image" src={product} alt='product-image' />
            <div className="product-info">
              <p className="product-name">Leather Shoes</p>
              <p className="product-tag">Shoe</p>
              <p className="product-price"><span className="price">$199</span><span className="discounted-price">&nbsp;$150</span></p>
            </div>
          </div>
          <div className="product">
            <Image className="product-image" src={product} alt='product-image' />
            <div className="product-info">
              <p className="product-name">Leather Shoes</p>
              <p className="product-tag">Shoe</p>
              <p className="product-price"><span className="price">$199</span><span className="discounted-price">&nbsp;$150</span></p>
            </div>
          </div>
          <div className="product">
            <Image className="product-image" src={product} alt='product-image' />
            <div className="product-info">
              <p className="product-name">Leather Shoes</p>
              <p className="product-tag">Shoe</p>
              <p className="product-price"><span className="price">$199</span><span className="discounted-price">&nbsp;$150</span></p>
            </div>
          </div>
          <div className="product">
            <Image className="product-image" src={product} alt='product-image' />
            <div className="product-info">
              <p className="product-name">Leather Shoes</p>
              <p className="product-tag">Shoe</p>
              <p className="product-price"><span className="price">$199</span><span className="discounted-price">&nbsp;$150</span></p>
            </div>
          </div>
          <div className="product">
            <Image className="product-image" src={product} alt='product-image' />
            <div className="product-info">
              <p className="product-name">Leather Shoes</p>
              <p className="product-tag">Shoe</p>
              <p className="product-price"><span className="price">$199</span><span className="discounted-price">&nbsp;$150</span></p>
            </div>
          </div>
          <div className="product">
            <Image className="product-image" src={product} alt='product-image' />
            <div className="product-info">
              <p className="product-name">Leather Shoes</p>
              <p className="product-tag">Shoe</p>
              <p className="product-price"><span className="price">$199</span><span className="discounted-price">&nbsp;$150</span></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
