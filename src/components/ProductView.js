import React, { useEffect, useState } from 'react';

const ProductView = ({ product, children }) => {
  return (
    <div
      key={product._id}
      style={{ margin: '20px', border: 'solid 1px grey', padding: '2%' }}
    >
      {product.name}
      <div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        {children}
      </div>
    </div>
  );
};

export default ProductView;
