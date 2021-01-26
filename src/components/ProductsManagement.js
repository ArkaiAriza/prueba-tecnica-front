import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ProductView from './ProductView';

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:4000/product');
      setProducts(res.data);
    };
    getProducts();
  }, []);

  const handleDelete = ({ _id }) => {
    axios.delete(`http://localhost:4000/product/${_id}`);
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
      <div>Products</div>
      <Link to='/AddProduct'>
        <button>New</button>
      </Link>
      {renderProducts()}
    </div>
  );
};

export default ProductsManagement;
