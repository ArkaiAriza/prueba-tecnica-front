import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  width: 50%;
  min-height: 100px;
  color: white;
  background-color: #07b;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  cursor: pointer;
  text-decoration: none;
`;

const ManagementHub = () => {
  return (
    <StyledContainer>
      <StyledButton to='/ProductsManagement'>Products</StyledButton>
      <StyledButton to='/CategoriesManagement'>Categories</StyledButton>
    </StyledContainer>
  );
};

export default ManagementHub;
