import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import OrderContext from '../context/OrderContext';

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

  return (
    <div>
      Confirm Order
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            value={orderDetails.idType}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, idType: e.target.value })
            }
          />
          <input
            value={orderDetails.idNumber}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, idNumber: e.target.value })
            }
          />
          <input
            value={orderDetails.name}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, name: e.target.value })
            }
          />
          <input
            value={orderDetails.name}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, name: e.target.value })
            }
          />
          <input
            value={orderDetails.city}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, city: e.target.value })
            }
          />
          <input
            value={orderDetails.email}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, email: e.target.value })
            }
          />
          <button>Order</button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmOrder;
