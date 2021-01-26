import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import OrderContext from '../context/OrderContext';
import ProductView from './ProductView';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  min-height: 50%;
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
  border: solid 2px #07b;
  border-radius: 40px;
`;

const ButtonConatiner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled(Link)`
  display: flex;
  width: 40%;
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

const Cart = () => {
  const { products, deleteProduct } = useContext(OrderContext);

  const handleDelete = (product) => {
    deleteProduct(product);
  };

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <ProductView product={product}>
          <StyledButton
            style={{ backgroundColor: '#b22', width: '20%' }}
            onClick={() => handleDelete(product)}
          >
            Delete
          </StyledButton>
        </ProductView>
      );
    });
  };

  return (
    <StyledContainer>
      <h1>Cart</h1>
      <ProductList>{renderProducts()}</ProductList>
      <ButtonConatiner>
        <StyledButton to='/ConfirmOrder'>Order Products</StyledButton>
        <StyledButton to='/ProductsList'>Back to Products</StyledButton>
      </ButtonConatiner>
    </StyledContainer>
  );
};

export default Cart;
