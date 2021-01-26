import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import CategoryView from './CategoryView';

const CategoriesManagement = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('http://localhost:4000/category');
      setCategories(res.data);
    };
    getCategories();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/category/${id}`);
  };

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <CategoryView category={category}>
          <button onClick={() => handleDelete(category._id)}>Delete</button>
        </CategoryView>
      );
    });
  };

  return (
    <div>
      <div>Categories</div>
      <Link to='/AddCategory'>
        <button>New</button>
      </Link>
      {renderCategories()}
    </div>
  );
};

export default CategoriesManagement;
