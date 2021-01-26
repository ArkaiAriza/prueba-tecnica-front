import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledProduct = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  box-sizing: border-box;
  min-height: 50px;
  width: 100%;
  border: solid 1px lightgrey;
`;

const ProductView = ({ product, children }) => {
  return (
    <StyledProduct key={product._id}>
      <div>
        <h2>{product.name}</h2>
        <h5>{product.description}</h5>
      </div>
      <div>
        <h2>${product.price}</h2>
        <h3>{product.stock} units left</h3>
      </div>
      {children}
    </StyledProduct>
  );
};

export default ProductView;
