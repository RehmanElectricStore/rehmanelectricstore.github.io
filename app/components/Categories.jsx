import React from "react";

const Categories = () => {
  return (
    <>
      <div>
        <h3 style={{ paddingLeft: "20px" }}>Categories</h3>
      </div>
      <div id='filter-slider'>
        <button style={{ background: "black" }} className='category'>
          All
        </button>
        <button className='category'>Scissors</button>
        <button className='category'>Pearls</button>
        <button className='category'>Frill</button>
      </div>
    </>
  );
};

export default Categories;
