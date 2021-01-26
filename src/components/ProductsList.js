import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

import ProductView from './ProductView';
import OrderContext from '../context/OrderContext';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState('');

  const { addProduct } = useContext(OrderContext);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:4000/product');
      setProducts(res.data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('http://localhost:4000/category');
      setCategories(res.data);
    };
    getCategories();
  }, []);

  const handleAddtoCart = (product) => {
    addProduct(product);
  };

  const handleFilter = async () => {
    const res = await axios.post('http://localhost:4000/product/filter', {
      params: { category: category },
    });
    setProducts(res.data);
  };

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <ProductView product={product} action={handleAddtoCart}>
          <button onClick={() => handleAddtoCart(product)}>Add to Cart</button>
        </ProductView>
      );
    });
  };

  const renderCategories = () => {
    return categories.map((category) => {
      return <MenuItem value={category._id}>{category.name}</MenuItem>;
    });
  };

  return (
    <div>
      <div>ProductsList</div>
      <Link to='/Cart'>
        <button>Go to Cart</button>
      </Link>
      <div style={{ width: '50%', display: 'flex' }}>
        <InputLabel id='select-id'>Category</InputLabel>
        <Select
          value={category}
          labelId='select-id'
          onChange={(e) => setCategory(e.target.value)}
        >
          {renderCategories()}
        </Select>
        <button onClick={handleFilter}>Filter</button>
      </div>
      {products && renderProducts()}
    </div>
  );
};

export default ProductsList;
