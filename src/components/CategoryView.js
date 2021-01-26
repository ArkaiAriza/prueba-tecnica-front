import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCategory = styled.div`
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

const CategoryView = ({ category, children }) => {
  return (
    <StyledCategory key={category._id}>
      <div>
        <h1>{category.name}</h1>
        <h5>{category.description}</h5>
      </div>
      {children}
    </StyledCategory>
  );
};

export default CategoryView;
