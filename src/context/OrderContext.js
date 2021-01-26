import React, { useState } from 'react';
import ProductsManagement from '../components/ProductsManagement';

const OrderContext = React.createContext({
  products: [],
});

export const OrderProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    if (!products.find((p) => p._id === product._id)) {
      setProducts([...products, product]);
    }
  };

  const deleteProduct = ({ _id }) => {
    setProducts(products.filter((product) => product._id !== _id));
  };

  return (
    <OrderContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
