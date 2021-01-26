import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const fields = [
  {
    label: 'name',
  },
  {
    label: 'description',
  },
];

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  min-height: 50%;
  width: 100%;
`;

const StyledButton = styled.div`
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
  margin: 30px 0;
`;

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category);
    axios.post('http://localhost:4000/category', {
      params: { category: category },
    });
  };

  const renderInputs = () => {
    return fields.map((field) => {
      return (
        <TextField
          value={category[field.label]}
          label={field.label}
          onChange={(e) =>
            setCategory({ ...category, [field.label]: e.target.value })
          }
        />
      );
    });
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        {renderInputs()}
        <StyledButton>Add</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default AddCategory;
