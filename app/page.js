import Product from './components/Product'
import FeaturedProducts from './components/FeaturedProducts'
import Categories from './components/Categories'


export default function Home() {
  return (
    <div>
      <FeaturedProducts />
      <Categories />
        <div id="products-grid">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
    </div>
  )
}
