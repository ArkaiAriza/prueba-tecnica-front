import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { OrderProvider } from '../context/OrderContext';

import ProductsManagement from './ProductsManagement';
import AddProduct from './AddProduct';
import CategoriesManagement from './CategoriesManagement';
import AddCategory from './AddCategory';
import ProductsList from './ProductsList';
import Cart from './Cart';
import ConfirmOrder from './ConfirmOrder';

const App = () => {
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:4000/product');
    };
    getProducts();
  }, []);

  return (
    <OrderProvider>
      <Router>
        <Route path='/ProductsManagement'>
          <ProductsManagement />
        </Route>
        <Route path='/AddProduct'>
          <AddProduct />
        </Route>
        <Route path='/CategoriesManagement'>
          <CategoriesManagement />
        </Route>
        <Route path='/AddCategory'>
          <AddCategory />
        </Route>
        <Route path='/ProductsList'>
          <ProductsList />
        </Route>
        <Route path='/Cart'>
          <Cart />
        </Route>
        <Route path='/ConfirmOrder'>
          <ConfirmOrder />
        </Route>
      </Router>
    </OrderProvider>
  );
};

export default App;
