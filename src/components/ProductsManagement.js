import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProductView from './ProductView';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  min-height: 50%;
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
  border: solid 2px #07b;
  border-radius: 40px;
`;

const StyledButton = styled(Link)`
  display: flex;
  width: 30%;
  min-height: 40px;
  color: white;
  background-color: #07b;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5% 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:4000/product');
      setProducts(res.data);
    };
    getProducts();
  }, []);

  const handleDelete = ({ _id }) => {
    axios.delete(`http://localhost:4000/product/${_id}`);
  };

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <ProductView product={product}>
          <StyledButton onClick={() => handleDelete(product)}>
            Delete
          </StyledButton>
        </ProductView>
      );
    });
  };

  return (
    <StyledContainer>
      <h1>Products</h1>
      <StyledButton to='/AddProduct'>New Product</StyledButton>
      <ProductList>{renderProducts()}</ProductList>
    </StyledContainer>
  );
};

export default ProductsManagement;
