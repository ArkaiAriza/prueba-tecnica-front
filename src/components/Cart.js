import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import OrderContext from '../context/OrderContext';
import ProductView from './ProductView';

const Cart = () => {
  const { products, deleteProduct } = useContext(OrderContext);

  const handleDelete = (product) => {
    deleteProduct(product);
  };

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <ProductView product={product}>
          <button onClick={() => handleDelete(product)}>Delete</button>
        </ProductView>
      );
    });
  };

  return (
    <div>
      <div>Cart</div>
      {renderProducts()}
      <Link to='/ConfirmOrder'>
        <button>Order Products</button>
      </Link>
      <Link to='/ProductsList'>
        <button>Back to Products</button>
      </Link>
    </div>
  );
};

export default Cart;
