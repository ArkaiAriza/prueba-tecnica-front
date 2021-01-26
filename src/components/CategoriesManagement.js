import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CategoryView from './CategoryView';

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

const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5% 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

const CategoriesManagement = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('http://localhost:4000/category');
      setCategories(res.data);
    };
    getCategories();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/category/${id}`);
  };

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <CategoryView category={category}>
          <StyledButton onClick={() => handleDelete(category._id)}>
            Delete
          </StyledButton>
        </CategoryView>
      );
    });
  };

  return (
    <StyledContainer>
      <h1>Categories</h1>
      <StyledButton to='/AddCategory'>New</StyledButton>
      <CategoriesList>{renderCategories()}</CategoriesList>
    </StyledContainer>
  );
};

export default CategoriesManagement;
