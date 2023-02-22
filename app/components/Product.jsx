import React from "react";
import Image from "next/image";
import product from '../../assets/img/Product.png'

const Product = () => {
  return (
    <div className='product'>
      <Image className='product-image' src={product} alt='product-image' />
      <div className='product-info'>
        <p className='product-name'>Leather Shoes</p>
        <p className='product-tag'>Shoe</p>
        <p className='product-price'>
          <span className='price'>$199</span>
          <span className='discounted-price'>&nbsp;$150</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
