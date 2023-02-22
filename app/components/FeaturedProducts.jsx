import React from "react";
import Image from "next/image";
import featuredProduct from '../../assets/img/featuredProduct.png'

const FeaturedProducts = () => {
  return (
    <div className='featured-products'>
      <Image className='featured-product-image' src={featuredProduct} alt='' />
    </div>
  );
};

export default FeaturedProducts;
