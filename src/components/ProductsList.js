import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import styled from 'styled-components';

import ProductView from './ProductView';
import OrderContext from '../context/OrderContext';

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

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
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

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState('');

  const { addProduct } = useContext(OrderContext);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:4000/product');
      setProducts(res.data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('http://localhost:4000/category');
      setCategories(res.data);
    };
    getCategories();
  }, []);

  const handleAddtoCart = (product) => {
    addProduct(product);
  };

  const handleFilter = async () => {
    const res = await axios.post('http://localhost:4000/product/filter', {
      params: { category: category },
    });
    setProducts(res.data);
  };

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <ProductView product={product}>
          <StyledButton onClick={() => handleAddtoCart(product)}>
            Add to Cart
          </StyledButton>
        </ProductView>
      );
    });
  };

  const renderCategories = () => {
    return categories.map((category) => {
      return <MenuItem value={category._id}>{category.name}</MenuItem>;
    });
  };

  return (
    <StyledContainer>
      <h1>ProductsList</h1>
      <FilterContainer>
        <CategoryFilter>
          <Select
            value={category}
            labelId='select-id'
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: 100, marginRight: '10px' }}
          >
            {renderCategories()}
          </Select>
          <StyledButton onClick={handleFilter} style={{ minHeight: '30px' }}>
            Filter
          </StyledButton>
        </CategoryFilter>

        <StyledButton to='/Cart'>Go to Cart</StyledButton>
      </FilterContainer>
      <ProductList>{products && renderProducts()}</ProductList>
    </StyledContainer>
  );
};

export default ProductsList;
