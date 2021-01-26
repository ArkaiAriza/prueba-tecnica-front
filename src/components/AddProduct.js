import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MenuItem, Select, TextField, InputLabel } from '@material-ui/core';
import styled from 'styled-components';

const fields = [
  {
    label: 'name',
  },
  {
    label: 'description',
  },
  {
    label: 'barCode',
  },
  {
    label: 'category',
  },
  {
    label: 'price',
  },
  {
    label: 'stock',
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
  margin: 10px;
`;

const StyledInput = styled(TextField)`
  margin: 10px 0 !important;
  width: 60%;
`;

const StyledSelect = styled(Select)`
  margin: 10px 0 !important;
  width: 60%;
`;

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    barCode: '',
    stock: 0,
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('http://localhost:4000/category');
      setCategories(res.data);
    };
    getCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    axios.post('http://localhost:4000/product', {
      params: { product: product },
    });
  };

  const renderCategories = () => {
    return categories.map((category) => {
      return <MenuItem value={category._id}>{category.name}</MenuItem>;
    });
  };

  const renderInputs = () => {
    return fields.map((field) => {
      if (field.label === 'category') {
        return (
          <>
            <StyledSelect
              value={product[field.label]}
              id='select'
              label={field.label}
              labelId='select'
              onChange={(e) =>
                setProduct({ ...product, [field.label]: e.target.value })
              }
            >
              {renderCategories()}
            </StyledSelect>
          </>
        );
      }
      return (
        <StyledInput
          value={product[field.label]}
          label={field.label}
          onChange={(e) =>
            setProduct({ ...product, [field.label]: e.target.value })
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

export default AddProduct;
