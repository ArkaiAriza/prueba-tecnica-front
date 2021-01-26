import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MenuItem, Select, TextField, InputLabel } from '@material-ui/core';

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
            <InputLabel>{field.label}</InputLabel>
            <Select
              value={product[field.label]}
              label={field.label}
              onChange={(e) =>
                setProduct({ ...product, [field.label]: e.target.value })
              }
            >
              {renderCategories()}
            </Select>
          </>
        );
      }
      return (
        <TextField
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
    <div>
      <div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }}
        >
          {renderInputs()}
          <button style={{ maxWidth: '10%' }}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
