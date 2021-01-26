import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

import OrderContext from '../context/OrderContext';

const fields = [
  {
    label: 'name',
  },
  {
    label: 'idType',
  },
  {
    label: 'idNumber',
  },
  {
    label: 'city',
  },
  {
    label: 'address',
  },
  {
    label: 'email',
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

const ConfirmOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    idType: '',
    idNumber: '',
    name: '',
    city: '',
    address: '',
    email: '',
  });

  const { products, deleteProduct } = useContext(OrderContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderDetails);
    axios.post('http://localhost:4000/order', {
      params: { order: { products: products, userData: orderDetails } },
    });
  };

  const renderInputs = () => {
    return fields.map((field) => {
      return (
        <StyledInput
          value={orderDetails[field.label]}
          label={field.label}
          onChange={(e) =>
            setOrderDetails({ ...orderDetails, [field.label]: e.target.value })
          }
        />
      );
    });
  };

  return (
    <StyledContainer>
      <h1>Confirm Order</h1>

      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        {renderInputs()}
        <StyledButton>Finish Order</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default ConfirmOrder;
